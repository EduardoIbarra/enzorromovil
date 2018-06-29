(function(){
    var app = angular.module('infox-app');
    app.controller('SearchCtrl', ['$scope', '$http', '$localStorage', '$ionicScrollDelegate', '$stateParams', '$rootScope','PlaceClasification',
        function($scope, $http, $localStorage, $ionicScrollDelegate, $stateParams, $rootScope,PlaceClasification) {
        $scope.form = {page : 1};
        $scope.emptyMessage = "No Hay Resultados en Este Momento";
        $scope.doSearch = function(){
            $rootScope.showLoadingMask = true;
            $scope.emptyMessage = "Espere por favor";
            $http.jsonp('http://infox.mx/apps/consulta_datos.php?termino='+$scope.searchQuery+'&page='+$scope.form.page+'&ciudad=0&dia='+$rootScope.day+'&jsoncallback=JSON_CALLBACK')
                .success(function (data) {
                    // console.log(data);
                    $scope.places = [];
                    $scope.records = data.filas;
                    $scope.places = data.data || [];

                    PlaceClasification.sortClasifications($scope.places)
                        .then(function (response) {
                            angular.forEach(response, function (data) {
                                $scope.places.iconStyle = data.iconStyle;
                                $scope.places.icon = data.icon;
                            });
                        });
                    $ionicScrollDelegate.scrollTop();
                })
                .error(function (data){
                    console.log(data);
                    $scope.places = [];
                })
                .finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                    $rootScope.showLoadingMask = false;
                    $scope.emptyMessage = "No Hay Resultados en Este Momento";
                });
        };

        if($stateParams.search_query){
            $scope.searchQuery = $stateParams.search_query;
            $scope.doSearch();
        }
        $scope.clickedMethod = function(callback){
            $scope.searchQuery = callback.item.cadena;
            $scope.form.page = 1;
            $scope.doSearch();
        };
        $scope.calculatePages = function(){
            return Math.floor($scope.records / 15);
        }
    }]);
}());