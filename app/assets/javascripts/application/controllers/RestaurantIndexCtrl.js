this.restauranteur.controller('RestaurantIndexCtrl', [
  '$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.restaurants = [];

    $http.get('./restaurants.json').success(function(data) {
      return $scope.restaurants = data;
    });

    $scope.viewRestaurant = function(id) {
      return $location.url("/restaurants/" + id);
    };
  }
]);
