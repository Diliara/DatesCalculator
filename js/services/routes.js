angular.module('datesCalcApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/migration/index.html'
        })
            .otherwise({
                redirectTo: '/home'
            });
    }]);
