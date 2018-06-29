(function(){
    var app = angular.module('infox-app');
    app.controller('GeneralCtrl', ['$scope', '$http', '$localStorage', '$ionicSideMenuDelegate', '$timeout', '$rootScope', '$state', '$window', function($scope, $http, $localStorage, $ionicSideMenuDelegate, $timeout, $rootScope, $state, $window) {
        $scope.toggleMenu = function(){
            $ionicSideMenuDelegate.toggleRight();
        };
        if($localStorage.hasSeenTut !== true){
            $rootScope.showTut = true;
            $timeout(function(){
                $rootScope.showTut = false;
                $localStorage.hasSeenTut = true;
            }, 10000);
        }
        $rootScope.state = $state;
        $rootScope.form = {searchQueryOutside:null};
        $rootScope.doSearchOutside = function(){
            $state.go('tabs.search_outside', {search_query: $rootScope.form.searchQueryOutside});
        };
        $rootScope.callbackMethod = function (query, isInitializing) {
            return $http.jsonp('http://www.infox.mx/apps/autocomplete.php?termino='+query+'&jsoncallback=JSON_CALLBACK');
        };
        $rootScope.showLoadingMask = false;
        var day = new Date().getDay();
        switch (day){
            case 0:
                $rootScope.day = 'Domingo';
                break;
            case 1:
                $rootScope.day = 'Lunes';
                break;
            case 2:
                $rootScope.day = 'Martes';
                break;
            case 3:
                $rootScope.day = 'Miercoles';
                break;
            case 4:
                $rootScope.day = 'Jueves';
                break;
            case 5:
                $rootScope.day = 'Viernes';
                break;
            case 6:
                $rootScope.day = 'Sabado';
                break;
        }
        //var element = $window.document.getElementById("component1");
        //element.focus();
    }]);
}());