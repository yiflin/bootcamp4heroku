angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http:///api/listings');
    },
	
	create: function(listing) {
	  return $http.post('http:///api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
	  return $http.delete('http:///api/listings/' + id);
    }
  };

  return methods;
});
