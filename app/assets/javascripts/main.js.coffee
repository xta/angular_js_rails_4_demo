@restauranteur = angular.module('restauranteur', [])

@restauranteur.
  config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

    $routeProvider.
      when('/restaurants', {
        templateUrl: '../templates/restaurants/index.html',
        controller: 'RestaurantIndexCtrl'
      }).
      when('/restaurants/:id', {
        templateUrl: '../templates/restaurants/show.html',
        controller: 'RestaurantShowCtrl'
      }).
      otherwise({redirectTo: '/restaurants'});

    $locationProvider.html5Mode(true);
])
