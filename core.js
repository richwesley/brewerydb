/**
 * Handles all map related stuff
 *
 * Publishes:
 *    - Map.markerClick
 
 **/
//const http = require('http');
//const port = 3000;
//const requestHandler = (request, response) => {  
//  console.log(request.url);
//  response.end('Hello Node.js Server!');
//};
//
//const server = http.createServer(requestHandler);
//
//server.listen(port, (err) => {  
//  if (err) {
//    return console.log('something bad happened', err);
//  }
//
//  console.log(`server is listening on ${port}`);
//});

var Map = function() {

    var config = {};
    var markers = [];
    var $map = null;
    var $infoWindow = null;
    var $breweryInfoTemplate = null;
    var $breweryDetailsTemplate = null;
    var searchArea = null;
    var $directionsRenderer = null;
    var pathArea = null;

    function init(options) {

        config = {
            baseUrl: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpzcx4xPG0GtyMrFs83Mxa0Vm0V4TCyKo&callback=initMap",
            mapSelector: '#map',
            useInfoWindows: true,
            mapOptions: {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoom: 4,
                center: new google.maps.LatLng(34, -98),
                mapTypeControl: false,
                panControl: true,
                scaleControl: true,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.LEFT_TOP
                },
                streetViewControl: false
            }
        };

        $.extend(true, config, options);

        $infoWindow = new InfoBubble({
            minWidth: 350,
            maxWidth: 350,
            minHeight: 170,
            maxHeight: 190
        });

        $map = new google.maps.Map(document.getElementById('map'), config.mapOptions);

        $directionsRenderer = new google.maps.DirectionsRenderer({map: $map});

        $breweryInfoTemplate = $('#breweryInfoTemplate');
        $breweryDetailsTemplate = $('#breweryDetailsTemplate');

        $.subscribe('Controls.addBrewery', function(el) {
            addMarker(el);
        });

        $.subscribe('Controls.addFeaturedBrewery', function(locations) {
            $.each(locations, function(index, loc) {
                addMarker(loc);
                google.maps.event.trigger(markers[loc.id], 'click');
            });
        });

        $.subscribe('resultEntryClick', function(locationId) {
            $map.panTo(markers[locationId].getPosition());
            google.maps.event.trigger(markers[locationId], 'click');
        });

        $.subscribe('resultEntryMouseover', function(breweryId) {

        });

        $.subscribe('resultEntryMouseout', function(breweryId) {

        });

        $.subscribe('Geocoder.gotLocation', function(lat, lng) {
            $map.panTo(new google.maps.LatLng(lat, lng));
            $map.setZoom(8);
        });
    }

    function addMarker(el) {

        if (el.latitude == false && el.longitude == false) {
            return;
        }

        var position = new google.maps.LatLng(el.latitude, el.longitude);

        var title = el.brewery.name;
        if (el.isPrimary != "Y") {
            title += ' - ' + el.name;
        }

        var marker = new google.maps.Marker({
            position: position,
            title: title,
            map: $map
        });

        if (el.inPlanning == 'Y') {

            var src = config.baseUrl + '/public/images/marker_sprite_green.png';

            marker.setIcon(new google.maps.MarkerImage(src, new google.maps.Size(20, 34)));
            marker.setShadow(new google.maps.MarkerImage(src,
                     new google.maps.Size(27, 34),
                     new google.maps.Point(30, 0),
                     new google.maps.Point(0, 34)));
        }

        if (config.useInfoWindows) {

            var breweryInfoHtml = $('<div>')
                             .addClass('breweryInfoWindow')
                             .append($breweryInfoTemplate.tmpl(el))
                             .html();

            var beerListHtml = "Loading...";

            var breweryDetailsHtml = $('<div>')
                             .addClass('breweryInfoWindow')
                             .append($breweryDetailsTemplate.tmpl(el))
                             .html();
        }

        google.maps.event.addListener(marker, 'click', function() {

            if (config.useInfoWindows) {

                // we have to remove them in reverse because if you remove
                // index 0 first then index 1 becomes index 0...so it just makes
                // more sense to do 1 then 0.
                $infoWindow.removeTab(2);
                $infoWindow.removeTab(1);
                $infoWindow.removeTab(0);

                $infoWindow.addTab('Location', breweryInfoHtml);
                $infoWindow.addTab('Details', breweryDetailsHtml);
                $infoWindow.addTab('Beers', beerListHtml);

                $infoWindow.open($map, marker);

                Data.getBeersByBreweryId(el.breweryId, function(beerList) {

                    var $div = $('<div>').addClass('infoWindow');

                    var $table = $('<table>').addClass('breweryBeerList');

                    var $tbody = $('<tbody>');

                    var $tr = $('<tr>');

                    if (beerList.length == 0) {

                        $('<td>').html('No Beers Found')
                                 .attr('title', 'No Beers Found')
                                 .appendTo($tr);

                        $tr.appendTo($tbody);

                    } else {

                        $.each(beerList, function(index, beer) {

                            $tr = $('<tr>');

                            var $td = $('<td>').addClass('beerLink')
                                           .attr('data-beerid', beer.id)
                                           .attr('data-breweryid', el.breweryId)
                                           .attr('data-locationid', el.id);

                            if (beer.srm) {
                                $('<div>').addClass('srm')
                                          .html('')
                                          .attr('style', 'background-color: #' + beer.srm.hex)
                                          .appendTo($td);
                            }

                            $('<div>').html(beer.name)
                                       .addClass('beerName')
                                       .appendTo($td);

                            if (beer.abv || beer.styleId) {
                                var str = '';

                                if (beer.styleId) {
                                    str += beer.style.name;
                                }

                                if (beer.abv) {
                                    str += ' (' + beer.abv + '%)';
                                }

                                $('<div>').html(str)
                                          .addClass('beerMeta')
                                          .appendTo($td);
                            }

                            $td.appendTo($tr);
                            $tr.appendTo($tbody);
                        });
                    }

                    $tbody.appendTo($table);
                    $('<h1>').html(title).appendTo($div);
                    $table.appendTo($div);

                    var $data = $('<div>');
                    $div.appendTo($data);

                    $infoWindow.updateTab(2, 'Beers', $data.html());

               });
            }

            $.publish('Map.markerClick', [el.id]);
        });

        markers[el.id] = marker;
    }

    function renderDirections(directionsResult) {
        $directionsRenderer.setMap(null);
        $directionsRenderer = null;
        $directionsRenderer = new google.maps.DirectionsRenderer({map: $map});
        $directionsRenderer.setDirections(directionsResult);
    }

    function getCenter() {
        return $map.getCenter();
    }

    function getDefaultCenter() {
        return config.mapOptions.center;
    }

    function resize() {
        google.maps.event.trigger($map, "resize");
    }

    function panTo(lat, lng) {
        $map.panTo(new google.maps.LatLng(lat, lng));
    }

    function setZoom(zoomLevel) {
        $map.setZoom(zoomLevel);
    }

    function zoomToSearchArea() {
        var bounds = searchArea.getBounds();
        $map.setCenter(bounds.getCenter());
        $map.fitBounds(bounds);
    }

    function zoomToFitMarkers() {

        var bounds = new google.maps.LatLngBounds();

        var numMarkers = 0;
        for (m in markers) {
            numMarkers++;
            bounds.extend(markers[m].position);
        }
        $map.setCenter(bounds.getCenter());
        $map.fitBounds(bounds);

        // if we only have one marker, zoom out some so that we kind
        // of tell where we are
        if (numMarkers == 1) {
            $map.setZoom($map.getZoom() - 5);
        }

    }

    function drawCircle(lat, lng, radius) {

        radius *= 1600; // convert to meters if in miles
        if (searchArea != null) {
            searchArea.setMap(null);
        }

        searchArea = new google.maps.Circle({
            center: new google.maps.LatLng(lat, lng),
            radius: radius,
            strokeColor: "#E38D09",
            strokeOpacity: 0.75,
            strokeWeight: 2,
            fillColor: "#F8BD01",
            fillOpacity: 0.25,
            map: $map
        });
    }

    /**
     * The points that make up the path and the distance in kilometers
     */
    function drawPolygon(vertices) {

        if (pathArea != null) {
            pathArea.setMap(null);
        }

        pathArea = null;

        // this has to happen with a callback because there's a delay in execution
        // with the drawing and we need to make sure everything is set to be able
        // to reliably get the path points out of the object later.
        pathArea = new PathOverlay(vertices, $map);
    }

    /**
     * Get the width of the world of the current projection in pixels
     *
     */
    function getWorldWidth() {

        var Test = function(map){
            this.setMap(map);
        };

        Test.prototype = new google.maps.OverlayView();
        Test.prototype.onAdd = function() {};
        Test.prototype.onRemove = function() {};
        Test.prototype.draw = function() {
           this.prj = this.getProjection();
           this.worldWidth = this.prj.getWorldWidth();
        };

        var t = new Test($map);

        // there's a delay here that I can't get around, so we have to wait
        // 1 second before trying to get the world width and then publish an
        // event so we can know we've got the value
        setTimeout(function() {
            $.publish('Map.gotWorldWidth', [t.worldWidth]);
        }, 1500);
    }

    function reset() {

        $infoWindow.close();

        if (searchArea != null) {
            searchArea.setMap(null);
        }

        if (pathArea != null) {
            pathArea.setMap(null);
            pathArea = null;
        }
        clearMarkers();
        $map.setZoom(config.mapOptions.zoom);
        $map.panTo(config.mapOptions.center);
    }

    function clearOverlays() {

        if (searchArea != null) {
            searchArea.setMap(null);
            searchArea = null;
        }

        if (pathArea != null) {
            pathArea.setMap(null);
            pathArea = null;
        }

        $directionsRenderer.setMap(null);
        $directionsRenderer = null;
        $directionsRenderer = new google.maps.DirectionsRenderer({map: $map});
    }

    function clearMarkers() {

        $infoWindow.close();

        for (m in markers) {
            markers[m].setMap(null);
        }

        markers.length = 0;
        markers = [];
    }

    function getMap() {
        return $map;
    }

    return {
        init: init,
        addMarker: addMarker,
        drawCircle: drawCircle,
        clearMarkers: clearMarkers,
        clearOverlays: clearOverlays,
        getMap: getMap,
        reset: reset,
        resize: resize,
        panTo: panTo,
        setZoom: setZoom,
        zoomToSearchArea: zoomToSearchArea,
        zoomToFitMarkers: zoomToFitMarkers,
        getCenter: getCenter,
        getDefaultCenter: getDefaultCenter,
        renderDirections: renderDirections,
        drawPolygon: drawPolygon,
        getWorldWidth: getWorldWidth
    };
}();

/**
 * Handles all the stuff related to finding breweries along a route
 *
 * Publishes:
 *      -
 *
 */
var Directions = function() {

    var config = {};
    var $directionsService = null;
    var $lastDirectionsResult = null;

    function init(options) {

        config = {
            baseUrl: "http://api.brewerydb.com/v2/adjuncts?key=ff5080447195a85b7b0b9ed7b50e6b9af"
        };

        $.extend(true, config, options);

        $directionsService = new google.maps.DirectionsService();
    }

    function getDirections(from, to, callback) {

        var request = {
            origin: from,
            destination: to,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            provideRouteAlternatives: false
        };

        $directionsService.route(request, function(result, status) {

            if (status == google.maps.DirectionsStatus.OK) {

                // Box the overview path of the first route
                $lastDirectionsResult = result.routes[0].overview_path;

                callback(result);
            } else {
                alert(getStatusMessage(status));
                callback(false);
            }

        });
    }

    function getStatusMessage(status) {

        switch (status) {

            case google.maps.DirectionsStatus.INVALID_REQUEST:
                return 'Your request was invalid.  Please try again.'
                break;
            case google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED:
                return 'Too many waypoints were given.  The maxiumum number allowed is 8.'
                break;
            case google.maps.DirectionsStatus.NOT_FOUND:
                return 'One of the locations could not be found.  Please try again.'
                break;
            case google.maps.DirectionsStatus.OVER_QUERY_LIMIT:
                return 'Directions request limit exceeded.  Please try again later.';
                break;
            case google.maps.DirectionsStatus.REQUEST_DENIED:
                return 'Error requesting directions.  Please try again.';
                break;
            case google.maps.DirectionsStatus.UNKNOWN_ERROR:
                return 'Uh oh! Something unknown happened with the server.  Try it again and see what happens.';
                break;
            case google.maps.DirectionsStatus.ZERO_RESULTS:
                return 'No route could be found between the origin and destination.';
                break;
            default:
                return 'There was an error requesting your directions.  Please try again.';
                break;
        }
    }

    return {
        init: init,
        getDirections: getDirections
    };

}();


/**
 * Handles all geocoding related tasks
 *
 * Publishes:
 *      - Geocoder.gotLocation
 */
var Geocoder = function() {

    var config = {};
    var $geocoder = null;

    function init(options) {

        config = {
            baseUrl: "http://api.brewerydb.com/v2/adjuncts?key=ff5080447195a85b7b0b9ed7b50e6b9af"
        };

        $.extend(true, config, options);

        $geocoder = new google.maps.Geocoder();
    }

    function geocodeAddress(address) {

        $geocoder.geocode({'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();

                $.publish('Geocoder.gotLocation', [lat, lng]);

            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }

    function geoLocate() {

        navigator.geolocation.getCurrentPosition(

           // success
           function(position) {
               $.publish('Geocoder.gotLocation', [position.coords.latitude, position.coords.longitude]);
           },
           // fail
           function(error) {
               switch (error.code)
               {
                   case error.PERMISSION_DENIED:
                       alert('Permission was denied');
                       break;
                   case error.POSITION_UNAVAILABLE:
                       alert('Position is currently unavailable.');
                       break;
                   case error.PERMISSION_DENIED_TIMEOUT:
                       alert('User took to long to grant/deny permission.');
                       break;
                   case error.UNKNOWN_ERROR:
                       alert('An unknown error occurred.')
                       break;
               }
           }
       );
    }

    return {
        init: init,
        geocodeAddress: geocodeAddress,
        geoLocate: geoLocate
    };

}();

Data = function() {

    var config = {};
    var beerCache = {};
    var breweryCache = {};
    var styleCache = {};
    var categoryCache = {};

    function init(options) {

        config = {
            baseUrl: "http://api.brewerydb.com/v2/adjuncts?key=ff5080447195a85b7b0b9ed7b50e6b9a"
        };

        $.extend(true, config, options);
    }

    function getMapRoute(route, worldWidth, distanceFromRouteKm, from, to, callback) {

        $.post(config.baseUrl + '/index/map-route', {
               'route': JSON.stringify(route),
               'ww' : worldWidth,
               'from' : from,
               'to'   : to,
               'distance' : distanceFromRouteKm
            },
            function (response, textStatus, XHR) {

                if (response.error !== undefined) {
                    alert(response.error);
                    return;
                }

                var vertices = Array();

                $.each(response.polygon, function(index, v) {
                    vertices.push(new google.maps.LatLng(v.lat, v.lng));
                });

                Map.drawPolygon(vertices);

                if (response.data == undefined) {
                    callback([]);
                } else {

                    $.each(response.data, function(index, el) {
                        if (el.brewery != undefined) {
                            _cacheBrewery(el);
                        }
                    });

                    callback(response.data);
                }
            },
            'json'
        );
    }

    function getBreweries(lat, lng, radius, search, callback) {

        $.getJSON(config.baseUrl + '/index/get-breweries', {
               'lat': lat,
               'lng': lng,
               'radius': radius,
               'search' : search
            },
            function (response, textStatus, XHR) {

                if (response.error !== undefined) {
                    alert(response.error);
                    return;
                }

                if (response.data !== undefined && response.data.length != 0) {

                    $.each(response.data, function(index, el) {
                        if (el.brewery != undefined) {
                            _cacheBrewery(el);
                        }
                    });

                    callback(response.data);
                } else {
                    callback([]);
                }
            }
        );
//		$.ajax({
//  			url: "http://api.brewerydb.com/v2/adjuncts?key=ff5080447195a85b7b0b9ed7b50e6b9a",
//  			dataType: "jsonp",
//			success: function (response) {
//			console.log(response);
//		}
//			  
//		});
    }

    function getBreweryById(bdbid, callback) {

        $.getJSON(config.baseUrl + '/index/get-brewery-by-id', {
               'bdbid': bdbid
            },
            function (response, textStatus, jqXHR) {

                if (response.error !== undefined) {
                    alert(response.error);
                    return;
                }

                if (response.data !== undefined && response.data.length != 0) {

                    var locations = [];

                    var el = response.data;

                    $.each(el.locations, function(index, loc) {

                        loc.brewery = el;
                        
                        loc.breweryId = loc.brewery.id;

                        delete loc.brewery.locations;
                        locations.push(loc);

                        _cacheBrewery(loc);
                    });

                    callback(locations);

                } else {
                    callback([]);
                }
            }
        );
    }

    function searchBreweries(query, callback) {

        $.getJSON(config.baseUrl + '/index/search-breweries', {
               'query': query
            },
            function (response, textStatus, jqXHR) {

                if (response.error !== undefined) {
                    alert(response.error);
                    return;
                }

                if (response.data !== undefined && response.data.length != 0) {

                    var locations = [];

                    $.each(response.data, function(index, el) {

                        $.each(el.locations, function(index, loc) {

                            loc.brewery = el;
                            loc.breweryId = loc.brewery.id;

                            delete el.locations;
                            locations.push(loc);

                            _cacheBrewery(loc);
                        });
                    });

                    callback(locations);

                } else {
                    callback([]);
                }
            }
        );
    }

    function getBeerData(breweryId, beerId) {
        return beerCache[breweryId][beerId];
    }

    function getBreweryData(locationId) {
        return breweryCache[locationId];
    }

    function getBeersByBreweryId(breweryId, callback) {

        if (beerCache[breweryId] == undefined) {

           $.getJSON(config.baseUrl + '/index/get-beers', {
                   'breweryId': breweryId
                },

                function (data, textStatus, XHR) {

                    if (data.error !== undefined) {
                        alert(data.error);
                        return;
                    }

                    if (data.data !== undefined && data.data.length != 0) {
                        $.each(data.data, function(index, el) {
                            _cacheBeer(breweryId, el);
                        });

                        callback(beerCache[breweryId]);

                    } else {
                        callback([]);
                    }
                }
            );
       } else {
           callback(beerCache[breweryId]);
       }
    }

    function _cacheBeer(breweryId, el) {

        if (beerCache[breweryId] == undefined) {
            beerCache[breweryId] = {};
        }

        beerCache[breweryId][el.id] = el;
    }

    function _cacheBrewery(el) {
        if (breweryCache[el.id] == undefined) {
            breweryCache[el.id] = el;
        }
    }

    return {
        init: init,
        getBeersByBreweryId: getBeersByBreweryId,
        getBreweries: getBreweries,
        getBreweryById: getBreweryById,
        searchBreweries: searchBreweries,
        getBeerData: getBeerData,
        getBreweryData: getBreweryData,
        getMapRoute: getMapRoute
    };
}();


// callback is called (only once) after path has been drawn
function PathOverlay(vertices, map) {

    this.vertices_ = vertices;
    this.fillOpacity_ = 0.25;
    this.fillColor_ = '#F8BD01';
    this.strokeColor_ = '#E38D09';
    this.strokeOpacity_ = 0.75;
    this.strokeWeight_ = 2;
    this.poly_ = null;
    this.lstnZoom_ = null;
    this.map_ = map;

    this.setMap(map);
}

PathOverlay.prototype = new google.maps.OverlayView();

PathOverlay.prototype.getVertices = function() {
    return this.vertices_;
};

//
// PathOverlay implements the OverlayView interface
// That is it implements the methods onAdd, onRemove, and draw
//
PathOverlay.prototype.onAdd = function() {};

PathOverlay.prototype.onRemove = function() {

    if (this.poly_) {
        this.poly_.setMap(null);
    }

    if (this.lstnZoom_ != null) {
        google.maps.event.removeListener(this.lstnZoom_);
    }
}

PathOverlay.prototype.draw = function() {

    if (this.poly_ != null) {
        return;
    }

    this.prj = this.getProjection();

    var self = this;

    if (self.poly_ != null) {
        self.poly_.setMap(null);
    }

    self.poly_ = new google.maps.Polygon({
        paths: self.vertices_,
        strokeColor: self.strokeColor_,
        strokeWeight: self.strokeWeight_,
        strokeOpacity: self.strokeOpacity_,
        fillOpacity: self.fillOpacity_,
        fillColor: self.fillColor_
    });

    self.poly_.setMap(self.map_);
}