angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
	 Listings.create($scope.newListing).then(function(response) {
	 $scope.listings.push({
        code: $scope.newListing.code,
        name: $scope.newListing.name,
        address: $scope.newListing.address
      });


	 $scope.newListing = {};
	 }, function(error) {
		console.log(error);
	 });
    };

    $scope.deleteListing = function(id, index) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
	
	Listings.delete(id).then(function(response) {
	$scope.listings.splice(index,1);  
	}, function(error) {
		console.log(error);
	});
    };
	
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);