(function() {
    var app = angular.module('infox-app');
    app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){

        $ionicConfigProvider.tabs.position('bottom');

        $stateProvider.state('tabs', {
            url: '/app',
            abstract: true,
            templateUrl: 'views/tabs.html'
        });
        $stateProvider.state('tabs.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                }
            }
        });
        $stateProvider.state('tabs.nearby', {
            url: '/nearby',
            views: {
                'tab-nearby': {
                    templateUrl: 'views/nearby.html',
                    controller: 'NearbyCtrl'
                }
            }
        });
        $stateProvider.state('tabs.search', {
            url: '/search',
            views: {
                'tab-search': {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                }
            }
        });
        $stateProvider.state('tabs.search_outside', {
            url: '/search/:search_query',
            views: {
                'tab-search': {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                }
            }
        });
        $stateProvider.state('tabs.place', {
            url: '/place/:id',
            views: {
                'tab-nearby': {
                    templateUrl: 'views/place.html',
                    controller: 'PlaceCtrl'
                }
            }
        });
        $stateProvider.state('tabs.search_place', {
            url: '/search_place/:id',
            views: {
                'tab-search': {
                    templateUrl: 'views/place.html',
                    controller: 'PlaceCtrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/app/home');
    });

    app.config(function() {
        var commonConfig = {
            popupOptions: {
                location: 'no',
                toolbar: 'yes',
                width: window.screen.width,
                height: window.screen.height
            }
        }
    });
    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
    app.filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);
    app.directive('autoFocus', function($timeout) {
        return {
            restrict: 'AC',
            link: function(_scope, _element) {
                $timeout(function(){
                    _element[0].focus();
                }, 0);
            }
        };
    });
})();