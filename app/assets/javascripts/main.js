this.restauranteur = angular.module('restauranteur', []);

this.restauranteur.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/restaurants', {
      templateUrl: '../templates/restaurants/index.html',
      controller: 'RestaurantIndexCtrl'
    }).when('/restaurants/:id', {
      templateUrl: '../templates/restaurants/show.html',
      controller: 'RestaurantShowCtrl'
    }).otherwise({
      redirectTo: '/restaurants'
    });

    $locationProvider.html5Mode(true);
  }
]);
