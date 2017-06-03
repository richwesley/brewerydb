// JavaScript Document

var express = require('express');
var app = express();
const http = require('http');
const brewdb = require('./brewerydb');
const port = 3000;
const requestHandler = (request, response) => {
  brewdb.searchAll('dogfish', function (err, body) {
    response.end(JSON.stringify(body, null, 2));
  })
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

Data = function() {
	var lat = 37.7930;
	var lng = -122.4161;
	var radius = 500;
    var config = {};
    //var beerCache = {};
    var breweryCache = {};
   // var styleCache = {};
   // var categoryCache = {};
	var BreweryDb = require('brewerydb-node');
	var brewdb = new BreweryDb('ff5080447195a85b7b0b9ed7b50e6b9a');

    function init(options) {

        config = {
            baseUrl: "http://api.brewerydb.com/v2/adjuncts?key=ff5080447195a85b7b0b9ed7b50e6b9af"
        };

        $.extend(true, config, options);
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
    }

//function getBreweryById(bdbid, callback) {
//
//        $.getJSON(config.baseUrl + '/index/get-brewery-by-id', {
//               'bdbid': bdbid
//            },
//            function (response, textStatus, jqXHR) {
//
//                if (response.error !== undefined) {
//                    alert(response.error);
//                    return;
//                }
//
//                if (response.data !== undefined && response.data.length != 0) {
//
//                    var locations = [];
//
//                    var el = response.data;
//
//                    $.each(el.locations, function(index, loc) {
//
//                        loc.brewery = el;
//
//                        loc.breweryId = loc.brewery.id;
//
//                        delete loc.brewery.locations;
//                        locations.push(loc);
//
//                        _cacheBrewery(loc);
//                    });
//
//                    callback(locations);
//
//                } else {
//                    callback([]);
//                }
//            }
//        );
//    }

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

//	function getBeerData(breweryId, beerId) {
//        return beerCache[breweryId][beerId];
//    }

    function getBreweryData(locationId) {
        return breweryCache[locationId];
    }

 return {
        init: init,
     //   getBeersByBreweryId: getBeersByBreweryId,
        getBreweries: getBreweries,
    //    getBreweryById: getBreweryById,
        searchBreweries: searchBreweries,
    //    getBeerData: getBeerData,
    //    getBreweryData: getBreweryData,
    //    getMapRoute: getMapRoute
    };

}();
