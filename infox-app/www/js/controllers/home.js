(function () {
    var app = angular.module('infox-app');
    app.controller('HomeCtrl', ['$scope', '$http', '$localStorage', '$state', '$rootScope', '$cordovaSocialSharing', function ($scope, $http, $localStorage, $state, $rootScope, $cordovaSocialSharing) {

        $scope.advertising;
        $scope.parent = {show_ft: true, show_categories: false};
        $scope.isBigSearchActive = function () {
            return (!$scope.parent.show_categories);
        };

        $scope.clickedMethod = function (callback) {
            $rootScope.form.searchQueryOutside = null;
            $state.go('tabs.search_outside', {search_query: callback.item.cadena});
        };

        $scope.getAdvertisement = function () {
            $http({
                method: 'JSONP',
                url: 'http://www.infox.mx/apps/consulta_anunciopor.php?&jsoncallback=JSON_CALLBACK'
            }).then(function (response) {
                $scope.advertising = response.data.data[0];

                console.log($scope.advertising);
            });
        };

        $scope.goAdvertisement = function (advertising) {
            if (advertising.enlace == '1') {
                $state.go('tabs.place', {id: advertising.idnegocio});
            }
            else if (advertising.enlace == '2') {

            }
        };

        $scope.getAdvertisement();
    }]);
}());

