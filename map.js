$(document).ready(function() {

    var resultsWrapperWidth = $('#resultsWrapper').width();

    var $layout = $('body').layout({
                      applyDefaultStyles: false,
                      defaults: {
                          spacing_open: 0,
                          spacing_closed: 0
                      }
                  });

    $layout.sizePane('west', resultsWrapperWidth);

    Map.init();
    Geocoder.init();
    Directions.init();
    Data.init();
    Controls.init();
    News.init();
    Embed.init();

    $('a.modal').colorbox({
        transition: 'elastic',
        opacity: '.60',
        width: '700px',
        height: '600px',
        initialWidth: '700',
        initialHeight: '600',
        overlayClose: false
    });

    // Bind an event to window.onhashchange that, when the history state changes,
    // gets the url from the hash and displays either our cached content or fetches
    // new content to be displayed.
    $(window).bind('hashchange', function(e) {

        var hash = $.deparam.fragment();

        Controls.reset();
        Map.clearMarkers();

        if (!$.isEmptyObject(hash)) {

            if (hash.t == 's') { // load a location search
                                
                var r = '';
                if (hash.r) {
                    r = parseInt(hash.r, 10);
                }
                
                var a = '';
                
                if (hash.a) {
                    a = $.trim(hash.a);
                }
                
                Controls.loadLocationSearch(a, r);
                
            } else if (hash.t == 'r') { // load a route
                
                var from = '';
                if (hash.from) {
                    from = hash.from;
                }
                
                var to = '';
                if (hash.to) {
                    to = $.trim(hash.to);
                }
                
                var d = '';
                if (hash.d) {
                    d = parseInt(hash.d, 10);
                }
                
                Controls.loadRoute(from, to, d);
                
            } else if (hash.t == 'brewery') { // load a brewery search
                                
                var brewery = '';
                if (hash.brewery) {
                    brewery = $.trim(hash.brewery);
                }
                
                Controls.loadBrewerySearch(brewery);
                
            } else if (hash.t == 'bdbid') {
                var bdbid = '';

                if (hash.bdbid) {
                    bdbid = $.trim(hash.bdbid);
                }

                Controls.loadBreweryDbIdSearch(bdbid);

            } else {
                Map.reset();
            }

        } else {
            Map.reset();
        }
        
    });

    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $(window).trigger('hashchange');
});

/**
 * Handles all the interface stuff
 *
 * Publishes:
 *   - Controls.addBrewery (cause the Map cares about when a brewery is added to the interface)
 */
var Controls = function() {

    var $results  = null;
    var $address  = null;
    var $radius   = null;
    var $breweryCount = null;
    var $beerWindowTemplate = null;
    var selectedSearchType = 'search';
    var $searchResultsHeader = null;
    var $searchType = null;
    var $searchForms = null;
    var $shareLink = null;
    var $featured = null;
    var shareUrl = '';
    var baseUrl = '';
    var $loading = null;

    var emptySearchMessage = 'Enter a city & state, zip, or address';
    var emptyBrewerySearchMessage = 'Enter a brewery name';

    function init() {

        baseUrl = $('#baseUrl').val();
        
        $loading = $('#loading');
        $loading.hide();

        $searchResultsHeader = $('#searchResultsHeader');
        $searchResultsHeader.hide();

        $results = $('#results');
        
        $shareLink = $('#shareLink');
        
        $shareLink.colorbox({
            transition: 'elastic',
            opacity: '.60',
            width: '700px',
            height: '400px',
            initialWidth: '700',
            initialHeight: '400',
            overlayClose: false,
            onComplete: function() {
                Embed.init();
            }
        });

        $featured = $('#featured');

        // Location search form fields
        $address = $('#address');
        $radius  = $('#radius');
        
        // Route form fields
        $from = $('#from');
        $to = $('#to');
        $distanceFromRoute = $('#distanceFromRoute');
        
        // Brewery search form fields
        $brewerySearchString = $('#brewerySearchString');

        $breweryCount = $('#breweryCount');
        
        $beerWindowTemplate = $('#beerWindowTemplate');
        
        $searchType = $('#searchType');
        $searchForms = $('#searchForms');
        
        // show the initial searchType form
        $('form', $searchForms).not('#' + selectedSearchType + 'Form').hide();
        $('a[data-type=' + selectedSearchType + ']', $searchType).addClass('selected');
        
        $('a', $searchType).click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            selectedSearchType = $(this).attr('data-type');
            
            $('form', $searchForms).not('#' + selectedSearchType + 'Form').hide();
            $('#' + selectedSearchType + 'Form').show();
            $('a', $searchType).removeClass('selected');
            $(this).addClass('selected');
        });

        $results.delegate('.resultEntryName', 'click', function(e) {

            $entry = $(this).parent();

            $('.resultEntry', $results).removeClass('selected');
            $(this).addClass('selected');
            $.publish('resultEntryClick', [$entry.attr('data-locationid')]);
        });
        
        $results.delegate('.resultEntry', 'mouseover', function(e) {
            $entry = $(this);
            $.publish('resultEntryMouseover', [$entry.attr('data-locationid')]);
        });
        
        $results.delegate('.resultEntry', 'mouseout', function(e) {
            $entry = $(this);
            $.publish('resultEntryMouseout', [$entry.attr('data-locationid')]);
        });

        $('#map').delegate('.beerLink', 'click', function(e) {

            var beerData = Data.getBeerData($(this).attr('data-breweryid'), $(this).attr('data-beerid'));
            var locData = Data.getBreweryData($(this).attr('data-locationid'));
            
            console.log(locData);

            var title = beerData.name + ' by ' + locData.brewery.name;

            if (title.length > 50) {
                title = title.substr(0, 50) + '...';
            }

            $.colorbox({
                title: title,
                html: $beerWindowTemplate.tmpl(beerData),
                opacity: '.60',
                width: '480px',
                height: '480px',
                initialWidth: '480px',
                initialHeight: '480px',
                overlayClose: false
            });

            return false;
        });

        $.subscribe('Map.markerClick', function(locationId) {

           $('.resultEntry', $results).removeClass('selected');

           var $breweryResultEntry = $('#breweryResultEntry_' + locationId);

           $breweryResultEntry.addClass('selected');
           
        });

        // Get the breweries in the area when we've got a location
        $.subscribe('Geocoder.gotLocation', function(lat, lng) {

            $searchResultsHeader.show();
            $loading.show();

            $breweryCount.text('');

            var address = $.trim($address.val());
            var radius = $radius.val();

            Map.drawCircle(lat, lng, radius);
            Map.zoomToSearchArea();

            Data.getBreweries(lat, lng, radius, address, function(breweryList) {
                
                setShareUrl('t=s&a=' + address + '&r=' + radius);

                if (breweryList.length == 0) {
                    $breweryCount.text('No breweries found!');
                    $loading.fadeOut();
                    return;
                }
                
                var msg = ' Breweries Found';

                if (breweryList.length == 1) {
                    msg = ' Brewery Found';
                }

                $breweryCount.text(breweryList.length + msg);
                
                $.each(breweryList, function(index, el) {
                    
                    if (el.brewery != undefined) {
                        _addBreweryResult(el, 'location');
                    }
                    
                });
                
                $loading.fadeOut();
                
            });
        });

        initSearchForm();
        initRouteForm();
        initBrewerySearchForm();
    }
    
    function _addBreweryResult(loc, type)
    {
            
        // only show breweries that are open
        if (loc.isClosed == 'Y') {
            return;
        }

        var infoString = '';

        if (type == 'route') {
            infoString = loc.locality + ', ' + loc.region;
        } else if (type == 'search') {
            infoString = loc.locality + ', ' + loc.region;
        } else if (type == 'location') {
            infoString = loc.distance + ' mile' + ((loc.distance == 1) ? '' : 's') + ' away';
        } else {
            infoString = loc.locality + ', ' + loc.region;
        }

        $.publish('Controls.addBrewery', [loc]);

        var title = loc.brewery.name;
        if (loc.isPrimary != "Y") {
            title += ' - ' + loc.name;
        }
        
        $name = $('<p>').addClass('resultEntryName')
                        .text(title)
                        .attr('title', title);

        $distance = $('<span>').addClass('resultEntryDistance')
                                .text(infoString) 
                                .prepend('<br />')
                                .appendTo($name);

        $div = $('<div>').addClass('resultEntry breweryEntry')
                .attr('id', 'breweryResultEntry_' + loc.id)
                .attr('data-breweryid', loc.breweryId)
                .attr('data-locationid', loc.id)
                .data('metaInfo', loc)
                .append($name)
                .appendTo($results);
        
    }
    
    function loadTypeForm(type) {
        $('a[data-type=' + type + ']', $searchType).click();
    }
    
    function initRouteForm() {
        
        $from.val(emptySearchMessage).addClass('defaultVal');
        $to.val(emptySearchMessage).addClass('defaultVal');

        $('#routeForm').submit(function(e) {

           e.preventDefault();
           e.stopPropagation();

           var from = $.trim($from.val());
           var to = $.trim($to.val());
           var distanceFromRouteMiles = $distanceFromRoute.val();
           
           // convert miles to km
           distanceFromRoute = distanceFromRouteMiles * 1.609344;

           if (from == '' || from == emptySearchMessage) {
               alert('Please enter an address, city, state, or zip code');
               return;
           }
           
           if (to == '' || to == emptySearchMessage) {
               alert('Please enter an address, city, state, or zip code');
               return;
           }

           $searchResultsHeader.show();
           $loading.show();
           
           reset();
           Map.clearMarkers();
           Map.clearOverlays();
           
           var currState = $.bbq.getState();
           
           if (currState.t != 'r' || currState.from != from || currState.to != to || currState.d != distanceFromRouteMiles) {
           
               $.bbq.pushState({
                    't': 'r',                   
                    'from': from,
                    'to': to,
                    'd': distanceFromRouteMiles
               }, 2);
                
           } else {

                Directions.getDirections(from, to, function(result) {

                   Map.clearMarkers();
                   Map.clearOverlays();
               
                   if (result == false) {
                       $loading.fadeOut();
                       return;
                   }

                   Map.renderDirections(result);

                   // there is a callback with this because there's an asynchronicity with
                   // generation the path overlay and we need to make sure that all of the 
                   // path data is available before we try to use it.
                   
                   var worldWidth = Map.getWorldWidth();
                   
                   $.subscribe('Map.gotWorldWidth', function(worldWidth) {

                       Data.getMapRoute(result.routes[0].overview_path, worldWidth, distanceFromRoute, from, to, function(breweryList) {

                           Map.clearMarkers();

                           setShareUrl('t=r&from=' + from + '&to=' + to + '&d=' + distanceFromRouteMiles);

                            if (breweryList.length == 0) {
                                $breweryCount.text('No breweries found!');
                                $loading.fadeOut();
                                return;
                            }
                            
                            $.each(breweryList, function(index, el) {

                                if (el.brewery != undefined) {
                                    _addBreweryResult(el, 'route');
                                }

                            });
                            
                            _updateBreweryCount();

                            $loading.fadeOut();
                           
                       }); 
                       
                   });

               }); 
           } // end hash change check else
        });

        _setupPlaceholder('#from', emptySearchMessage);
        _setupPlaceholder('#to', emptySearchMessage);
    }
    
    function initBrewerySearchForm() {
        
        $brewerySearchString.val(emptyBrewerySearchMessage).addClass('defaultVal');

        $('#brewerySearchForm').submit(function(e) {

           e.preventDefault();
           e.stopPropagation();

           var brewerySearchString = $.trim($brewerySearchString.val());

           if (brewerySearchString == '' || brewerySearchString == emptyBrewerySearchMessage) {
               alert('Please enter a brewery to search for.');
               return;
           }

           $searchResultsHeader.show();
           $loading.show();

           reset();
           Map.clearMarkers();
           Map.clearOverlays();
           
           var currState = $.bbq.getState();
           
           if (currState.t != 'brewery' || currState.brewery != brewerySearchString) {
           
               $.bbq.pushState({
                    't': 'brewery',
                    'brewery': brewerySearchString
               }, 2);
                
           } else {
               Data.searchBreweries(brewerySearchString, function(breweryList) {

                   setShareUrl('t=brewery&brewery=' + brewerySearchString);

                   if (breweryList.length == 0) {
                       $breweryCount.text('No breweries found!');
                       $loading.fadeOut();
                       return;
                   }

                   $.each(breweryList, function(index, el) {
                       
                       if (el.brewery != undefined) {
                          _addBreweryResult(el, 'search');
                       }

                   });
                   
                   _updateBreweryCount();
                   
                   Map.zoomToFitMarkers();

                   $loading.fadeOut();

               });
           } // end hash change check else
        });

        _setupPlaceholder('#brewerySearchString', emptyBrewerySearchMessage);
    }

    function initSearchForm() {

        $address.val(emptySearchMessage).addClass('defaultVal');

        $('#searchForm').submit(function(e) {

           e.preventDefault();
           e.stopPropagation();

           reset();
           Map.clearMarkers();
           Map.clearOverlays();

           var address = $.trim($address.val());
           var radius = $radius.val();
           
           var currState = $.bbq.getState();
           
           if (currState.t != 's' || currState.a != address || currState.r != radius) {
           
               $.bbq.pushState({
                    't': 's',                   
                    'a': address,
                    'r': radius
               }, 2);
               
           } else {
               
               if (address == '' || address == emptySearchMessage) {
                   alert('Please enter an address, city, state, or zip code');
                   return;
               }

               Geocoder.geocodeAddress(address, radius);
           }
        });

        _setupPlaceholder('#address', emptySearchMessage);
    }
    
    function _updateBreweryCount() {
        
        var msg = ' Breweries Found';

        var total = $('.resultEntry').length;

        if (total == 1) {
            msg = ' Brewery Found';
        }

        $breweryCount.text(total + msg);
    }
    
    function setShareUrl(queryString) {
        
        var baseShareUrl = baseUrl + '/index/share-map/?';
        
        var url = baseShareUrl + encodeURI(queryString);
        
        $shareLink.attr('href', url);
    }
    
    function loadRoute(from, to, distance) {

        $featured.hide();

        loadTypeForm('route');
        $from.val(from);
        $from.removeClass('defaultVal');
        
        $to.val(to);
        $to.removeClass('defaultVal');
        
        distance = cleanRadius(distance);
        
        $distanceFromRoute.val(distance);
        $('#routeForm').submit();
    }
    
    function loadLocationSearch(search, radius) {        

        $featured.hide();

        loadTypeForm('search');
        $address.val(search);
        $address.removeClass('defaultVal');

        radius = cleanRadius(radius);
        
        $radius.val(radius);
        $('#searchForm').submit();
    }
    
    function loadBrewerySearch(search) {        

        $featured.hide();

        loadTypeForm('brewerySearch');
        $brewerySearchString.val(search);
        $brewerySearchString.removeClass('defaultVal');
        
        $('#brewerySearchForm').submit();
    }

    function loadBreweryDbIdSearch(bdbid) {
        reset();
        Map.clearMarkers();
        Map.clearOverlays();

        var currState = $.bbq.getState();

        if (currState.t != 'bdbid' || currState.bdbid != bdbid) {

           $.bbq.pushState({
                't': 'bdbid',
                'bdbid': bdbid
           }, 2);

        } else {
           Data.getBreweryById(bdbid, function(locations) {

               setShareUrl('t=bdbid&bdbid=' + bdbid);

               if (locations.length == 0) {
                   alert('Brewery not found!');
                   return;
               }

               $.publish('Controls.addFeaturedBrewery', [locations]);

               Map.zoomToFitMarkers();

           });
        } // end hash change check else
    }
    
    function cleanRadius(radius) {
        
        var validRadii = [5, 10, 25, 50, 100];

        if ($.inArray(radius, validRadii) == -1) {
            radius = 25;
        }
        
        return radius;
    }
    
    function _setupPlaceholder(selector, defaultMsg) {
        
        $(selector).focusin(function() {
            if ($(this).val() == defaultMsg) {
                $(this).val('').removeClass('defaultVal');
            }
        }).focusout(function() {
            if ($(this).val() == '') {
                $(this).val(defaultMsg).addClass('defaultVal');
            }
        }).blur(function() {

            if ($(this).val() == '') {
                $(this).val(defaultMsg).addClass('defaultVal');
            }

        }).focus(function() {

            if ($(this).val() == defaultMsg) {
                $(this).val('').removeClass('defaultVal');
            }
        });
    }

    function reset() {
        $results.empty();
        $breweryCount.empty();
    }

    return {
        init: init,
        reset: reset,
        loadLocationSearch: loadLocationSearch,
        loadBrewerySearch: loadBrewerySearch,
        loadRoute: loadRoute,
        loadBreweryDbIdSearch: loadBreweryDbIdSearch
    }
}();

/**
 * Handles all geocoding related tasks
 *
 * Publishes:
 *      - Geocoder.gotLocation
 */
var News = function() {

    var $header = null;
    var $list = null;

    function init() {

        $list = $('#headerNews a.newsItem');
        $header = $('#headerNews');

        $list.not(':first').hide();

        _cycle();
        setInterval(function() {
            _cycle();
        }, 8000);
    }

    function _cycle() {
        $list = $header.children();

        var current = $list.eq(0);
        var next = $list.eq(1);

        current.fadeOut(function() {
            current.remove().appendTo($header);
            next.fadeIn();
        });
    }

    return {
        init: init
    };

}();

var Embed = function() {

    var $embed_code;
    var $embed_baseurl;
    var $embed_qs;
    var $embed_w;
    var $embed_h;
    var $share_bitly;

    function init() {
        
        $embed_code = $('#embed_code');
        $embed_baseurl = $('#embed_baseurl');
        $embed_qs = $('#embed_qs');
        $embed_w = $('#embed_w');
        $embed_h = $('#embed_h');
        $share_bitly = $('#share_bitly');

        $('#embed_w, #embed_h').bind('change keydown keyup', function() {
            
            $(this).val($(this).val().replace(/[^\d.]/g, ""));
            _updateEmbedCode();
            
        }).change();

        $embed_code.focus(function() {
            this.select();
        }).click(function() {
            this.select();
        });
        
        $share_bitly.focus(function() {
            this.select();
        }).click(function() {
            this.select();
        });


    }

    function _updateEmbedCode()
    {
        var embedurl = $embed_baseurl.val() + '?' + $embed_qs.val() + '&w=' + $embed_w.val() + '&h=' + $embed_h.val();
        $embed_code.val('<script type="text/javascript" src="' + embedurl + '"></script>');
    }

    return {
        init: init
    };
}();