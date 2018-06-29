(function () {
    var app = angular.module('infox-app');
    app.controller('NearbyCtrl', ['$scope', '$http', '$localStorage', '$cordovaGeolocation', '$rootScope', '$stateParams', '$state', '$timeout', 'PlaceClasification', '$ionicScrollDelegate', '$interval', '$ionicPopup', '$ionicPlatform',
        function ($scope, $http, $localStorage, $cordovaGeolocation, $rootScope, $stateParams, $state, $timeout, PlaceClasification, $ionicScrollDelegate, $interval, $ionicPopup, $ionicPlatform) {

            var options = {timeout: 10000, enableHighAccuracy: true};

            $scope.form = {page: 1, listLabel: 0, item: null};
            $scope.markersArray = [];
            var markersTimeout;

            $scope.getNearBy = function (latitude, longitude) {
                $scope.limitLastPageItems = null;
                $rootScope.showLoadingMask = true;
                $http({
                    method: 'JSONP',
                    url: 'http://infox.mx/apps/georapp_json.php',
                    params: {
                        callback: 'JSON_CALLBACK',
                        lat: latitude,
                        lng: longitude,
                        np: $scope.form.page,
                        b: $rootScope.searchQuery
                    }
                }).then(function (response) {
                    $scope.places = [];
                    // console.log(response);
                    $ionicScrollDelegate.scrollTop();

                    $scope.records = response.data.resultados;

                    angular.forEach(response.data.data, function (data) {
                        $scope.places.push(data);
                    });


                    if ($scope.places.length <= 0) {
                        $scope.emptyMessage = "No se han encontrado lugares cerca de ti. Intenta de nuevo.";
                    } else {
                        setUserMarker();


                        //Total items to add its marker
                        var totalItems = $scope.places.length;

                        //Disble next button when on last page
                        if ($scope.form.page == $scope.calculatePages()) {
                            $scope.disablePageButton = true;
                            $scope.disableNextButton = true;

                            $scope.limitLastPageItems = ($scope.form.page * 20) - $scope.records;
                            $scope.limitLastPageItems = 20 - $scope.limitLastPageItems;
                            // $scope.form.item = 35);
                            // console.log($scope.limitLastPageItems);

                            //Only add marker to the limit items on the last page
                            totalItems = $scope.limitLastPageItems;

                        }

                        //Adjusting zoom dependig on the markers
                        var bounds = new google.maps.LatLngBounds();

                        //Set marker icon and icon label on list
                        PlaceClasification.sortClasifications($scope.places)
                            .then(function (response) {
                                angular.forEach(response, function (data) {
                                    $scope.places.iconStyle = data.iconStyle;
                                    $scope.places.icon = data.icon;
                                });
                            });

                        //Adding item markers
                        for (var i = 0; i < totalItems; i++) {
                            $scope.places[i].itemPosition = $scope.form.listLabel + (i + 1);

                            //Disable button
                            $scope.disablePageButton = true;
                            $scope.disableNextButton = true;

                            (function () {
                                var name = $scope.places[i].nombre;
                                var itemPositionLabel = $scope.places[i].itemPosition;
                                var itemPosition = i + 1;
                                var icon = $scope.places[i].icon;

                                var latLng = new google.maps.LatLng($scope.places[i].latitud, $scope.places[i].longitud);
                                var addMarkers = function (position, timeout) {

                                    google.maps.event.addListener($scope.map, 'tilt_changed', function () {
                                        markersTimeout = $timeout(function () {
                                            var marker = new MarkerWithLabel({
                                                map: $scope.map,
                                                animation: google.maps.Animation.DROP,
                                                position: latLng,
                                                icon: 'img/markers/' + icon,
                                                labelAnchor: new google.maps.Point(10, 12),
                                                labelInBackground: true
                                            });

                                            var infoWindow = new google.maps.InfoWindow({
                                                content: name
                                            });

                                            google.maps.event.addListener(marker, 'click', function () {
                                                infoWindow.open($scope.map, marker);
                                            });

                                            //Delay on adding the label animation
                                            marker.labelContent = itemPositionLabel;

                                            //Adjusting label size
                                            if (itemPositionLabel > 99) {
                                                marker.labelClass = "marker-label-lg";
                                            } else {
                                                marker.labelClass = "marker-label";
                                            }

                                            $scope.markersArray.push(marker);

                                            // console.log('Marker', itemPosition);

                                        }, timeout);

                                    });

                                };

                                addMarkers($scope.places[i], i * 200);

                                //Adjusting zoom dependig on the markers
                                bounds.extend(latLng);
                                if (totalItems > 1) {
                                    bounds.extend(latLng);
                                    $scope.map.fitBounds(bounds);
                                    $scope.map.panToBounds(bounds);
                                    $scope.map.setCenter(bounds.getCenter());
                                } else {
                                    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                                        var extendPoint = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.02, bounds.getNorthEast().lng() + 0.01);
                                        bounds.extend(extendPoint);
                                    }
                                    $scope.map.fitBounds(bounds);
                                    $scope.map.panToBounds(bounds);
                                    $scope.map.setCenter(bounds.getCenter());

                                }

                            })();

                        }

                    }


                }, function (data) {
                    // console.log(data)
                })
                    .finally(function () {
                        $scope.$broadcast('scroll.refreshComplete');
                        $rootScope.showLoadingMask = false;
                        // $scope.emptyMessage = "No Hay Resultados en Este Momento";
                    });

            };

            var initGeolocation = function (options) {
                $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

                    $scope.getNearBy(position.coords.latitude, position.coords.longitude);

                    //Used on refresh function
                    $scope.latitude = position.coords.latitude;
                    $scope.longitude = position.coords.longitude;


                }, function (error) {
                    // console.log("Could not get location");
                    // console.log(error);
                    if ($scope.places && $scope.places.length > 0) {
                        $scope.emptyMessage = "";
                    } else {
                        $scope.places = [];
                    }

                    isLocationEnabled();

                    $rootScope.showLoadingMask = false;


                });
            };

            var setUserMarker = function () {

                var latLng = new google.maps.LatLng($scope.latitude, $scope.longitude);

                $scope.userLocation = latLng;

                var mapOptions = {
                    center: latLng,
                    // zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [{
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [{"visibility": "simplified"}, {"hue": "#ff7700"}]
                    }, {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [{"visibility": "simplified"}]
                    }, {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#1d1d1d"}]
                    }, {
                        "featureType": "administrative.province",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#ffffff"}, {"visibility": "on"}]
                    }, {
                        "featureType": "administrative.province",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"color": "#ed5929"}, {"weight": "5.00"}, {"visibility": "on"}]
                    }, {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#787878"}, {"visibility": "on"}]
                    }, {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]
                    }, {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text",
                        "stylers": [{"visibility": "on"}]
                    }, {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text.fill",
                        "stylers": [{"visibility": "on"}, {"color": "#2d2d2d"}]
                    }, {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]
                    }, {
                        "featureType": "administrative.land_parcel",
                        "elementType": "geometry.fill",
                        "stylers": [{"saturation": "64"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{"color": "#fafafa"}]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{"color": "#2c2c2c"}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{"visibility": "on"}, {"color": "#d5d5d5"}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{"visibility": "on"}, {"color": "#ff0000"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#ed5929"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"weight": "5.00"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#ed5929"}, {"visibility": "on"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [{"color": "#ffffff"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [{"color": "#ffffff"}]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text.stroke",
                        "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [{"color": "#d9d9d9"}, {"visibility": "on"}]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry.fill",
                        "stylers": [{"visibility": "simplified"}, {"lightness": "4"}, {"saturation": "-100"}]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{"visibility": "off"}]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [{"color": "#e1e1e1"}, {"visibility": "on"}]
                    }]
                };

                $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                    var image = {
                        url: 'img/markers/user.png',
                        scaledSize: new google.maps.Size(50, 55)
                    };
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        animation: google.maps.Animation.DROP,
                        position: latLng,
                        icon: image
                    });


                    var infoWindow = new google.maps.InfoWindow({
                        content: "Estás aquí"
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open($scope.map, marker);
                    });

                    infoWindow.open($scope.map, marker);

                    $scope.userWindowOnChange = function () {
                        infoWindow.open($scope.map, marker);
                    }
                });

                $scope.emptyMessage = "";
            };

            $scope.clickedMethod = function (callback) {

                $timeout.cancel(markersTimeout);
                //Hide old markers
                for (var i = 0; i < $scope.markersArray.length; i++) {
                    $scope.markersArray[i].setMap(null);
                }
                $scope.markersArray = [];

                $rootScope.searchQuery = callback.item.cadena.cadena === undefined ? callback.item.cadena : callback.item.cadena.cadena;
                $scope.form.page = 1;
                $scope.form.listLabel = 0;


                $scope.userWindowOnChange();

                isLocationEnabled()


            };

            //When user hit submit on search
            $scope.$watch('searchQuery', function (query) {
                var callback = {item: {cadena: query}};
                // console.log(callback.item.cadena);
                $scope.clickedMethod(callback);
            });

            $scope.refresh = function () {
                isLocationEnabled()
            };

            $scope.changeFirstPage = function () {

                isLocationEnabled('first');

                // $scope.form.page = 1;
                // $scope.form.listLabel = 0;
                //Hide old markers
                for(var i = 0; i < $scope.markersArray.length; i++){
                    $scope.markersArray[i].setMap(null);
                }
                $scope.markersArray = [];
                $scope.userWindowOnChange();
            };

            $scope.changePreviousPage = function () {

                isLocationEnabled('previous');

                // $scope.form.page -= 1 ;
                // $scope.form.listLabel -= 20;

                //Hide old markers
                for(var i = 0; i < $scope.markersArray.length; i++){
                    $scope.markersArray[i].setMap(null);
                }
                $scope.markersArray = [];
                $scope.userWindowOnChange();

            };

            $scope.changeNextPage = function () {

                isLocationEnabled('next');

                // $scope.form.page += 1 ;
                // $scope.form.listLabel += 20;

                console.log(markersTimeout);
                // $timeout.cancel(markersTimeout);

                //Hide old markers
                for(var i = 0; i < $scope.markersArray.length; i++){
                    $scope.markersArray[i].setMap(null);
                }


                $scope.markersArray = [];
                $scope.userWindowOnChange();

            };


            $scope.calculatePages = function () {
                return Math.floor($scope.records / 15);
            };

            $scope.backToNearBy = function () {

                $rootScope.searchQuery = null;
                $scope.form.page = 1;
                $scope.form.listLabel = 0;

                //Hide old markers
                for (var i = 0; i < $scope.markersArray.length; i++) {
                    $scope.markersArray[i].setMap(null);
                }
                $scope.markersArray = [];

                isLocationEnabled()
            };


            enableLocationAlert = function () {

                $scope.$broadcast('scroll.refreshComplete');
                $scope.emptyMessage = "";

                $ionicPopup.alert({
                    title: 'Localización no habilitada',
                    template: 'Abre tu configuración para habilitar tu localización para mostrarte lugares cercanos a ti.',
                    buttons: [{
                        type: 'button-assertive',
                        text: 'Cancelar',
                        onTap: function () {
                            if ($scope.places.length > 0) {
                                $scope.notAvailableLocationMessage = "Habilita tu localización para mostrarte lugares más cecanos a ti.";
                            } else {
                                $scope.emptyMessage = "Habilita tu localización para mostrarte lugares más cecanos a ti.";
                            }
                        }
                    }, {
                        type: 'infox-button',
                        text: 'Abrir',
                        onTap: function () {
                            var refresh = true;
                            cordova.plugins.diagnostic.switchToLocationSettings();
                            $ionicPlatform.on("resume", function (event) {
                                if ($state.current.name == 'tabs.nearby' && refresh) {
                                    $scope.refresh();
                                }
                                refresh = false;
                            });
                        }
                    }]
                });


            };


            isLocationEnabled = function (updateList) {

                cordova.plugins.diagnostic.isLocationAvailable(function (available) {
                    console.log("Location is " + (available ? "available" : "not available"));

                    $scope.changePage = available;

                    if (available) {
                        if(updateList === 'first'){
                            $scope.form.page = 1 ;
                            $scope.form.listLabel = 0;
                        }
                        else if(updateList === 'next'){
                            $scope.form.page += 1 ;
                            $scope.form.listLabel += 20;
                        }
                        else if(updateList === 'previous'){
                            $scope.form.page -= 1 ;
                            $scope.form.listLabel -= 20;
                        }
                        $scope.notAvailableLocationMessage = "";
                        initGeolocation(options);

                    } else {
                        enableLocationAlert()
                    }

                }, function (error) {
                    console.error("The following error occurred: " + error);
                    $scope.notAvailableLocationMessage = "Habilita tu localización para mostrarte lugares más cecanos a ti.";
                });
            };

            initGeolocation(options);

        }]);
}());