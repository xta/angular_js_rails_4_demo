this.restauranteur.controller('RestaurantShowCtrl', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    return $http.get("./" + $routeParams.id + ".json").success(function(data) {
      return $scope.restaurant = data;
    });
  }
]);
