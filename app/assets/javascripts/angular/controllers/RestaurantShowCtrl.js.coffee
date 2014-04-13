@restauranteur.controller 'RestaurantShowCtrl', ['$scope', '$http', '$routeParams', ($scope, $http, $routeParams) ->
  $http.get("./#{$routeParams.id}.json").success((data) ->
    $scope.restaurant = data
  )
]
