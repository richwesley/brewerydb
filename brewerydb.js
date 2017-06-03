var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('ff5080447195a85b7b0b9ed7b50e6b9a');

function getById (id, opts, callback) {
  brewdb.beer.getById(id, {}, callback);
}

function searchAll (q, callback) {
  brewdb.search.all( { q: q }, callback);
}

module.exports = {
  getById: getById,
  searchAll: searchAll
}
