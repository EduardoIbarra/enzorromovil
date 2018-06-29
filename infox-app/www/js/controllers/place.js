(function(){
    var app = angular.module('infox-app');

    app.controller('PlaceCtrl', ['$scope', '$http', '$localStorage', '$ionicSlideBoxDelegate', '$ionicNavBarDelegate', '$ionicModal', '$rootScope', '$stateParams', '$timeout', '$ionicPopup', '$state', '$cordovaSocialSharing','$ionicScrollDelegate',
        function($scope, $http, $localStorage, $ionicSlideBoxDelegate, $ionicNavBarDelegate, $ionicModal, $rootScope, $stateParams, $timeout, $ionicPopup, $state, $cordovaSocialSharing, $ionicScrollDelegate) {
        $ionicNavBarDelegate.showBackButton(true);
        $scope.data = {};
        $scope.data.bgColors = [];
        $scope.data.currentPage = 0;
        $scope.ok = true;
        $scope.allOk = function(){
            $scope.ok = false;
        };

        for (var i = 0; i < 10; i++) {
            $scope.data.bgColors.push("bgColor_" + i);
        }

        var setupSlider = function() {
            //some options to pass to our slider
            $scope.data.sliderOptions = {
                initialSlide: 0,
                direction: 'horizontal', //or vertical
                speed: 300 //0.3s transition
            };

            //create delegate reference to link with slider
            $scope.data.sliderDelegate = null;

            //watch our sliderDelegate reference, and use it when it becomes available
            $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
                if (newVal != null) {
                    $scope.data.sliderDelegate.on('slideChangeEnd', function() {
                        $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
                        //use $scope.$apply() to refresh any content external to the slider
                        $scope.$apply();
                    });
                }
            });
        };

        setupSlider();
        $scope.initMap = function(){
            $scope.arrayData = [
                { src: 'http://wallpaperstock.net/coffee-bean-macro-wallpapers_34409_1280x720.jpg' },
                { src: 'http://cdn.wallpapersafari.com/51/73/yXgFkA.jpg' },
                { src: 'http://wallpaperstock.net/coffee-bean-macro-wallpapers_34409_1280x720.jpg' }
            ];

            var latLng = new google.maps.LatLng($scope.place.latitud,$scope.place.longitud);

            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true,
                styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff7700"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"},{"weight":"5.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#787878"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#2d2d2d"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fafafa"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d5d5d5"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"5.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ed5929"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ed5929"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ed5929"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d9d9d9"},{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#e1e1e1"},{"visibility":"on"}]}]
            };

            $scope.map = new google.maps.Map(document.getElementById("map2"), mapOptions);
            google.maps.event.addListener($scope.map, 'tilt_changed', function(){

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    icon: 'http://www.infox.mx/marcadores/infox-01.png'
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: $scope.place.nombre
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open($scope.map, marker);
                });

            });
        };

        // $scope.initMap();

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/300',
                text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }

        $scope.getPlaceInfo = function(){
            $rootScope.showLoadingMask = true;
            $http.jsonp('http://infox.mx/apps/consulta_info.php?idnum='+$stateParams.id+'&jsoncallback=JSON_CALLBACK')
                .success(function (data) {
                    console.log(data);
                    $scope.place = data.data[0] || null;
                    $timeout($scope.initMap, 2000);
                    $scope.dishes = data.platillos;
                    $scope.gallery = data.galeria;
                })
                .error(function (data){
                    $scope.place = null;
                })
                .finally(function(data){
                    $rootScope.showLoadingMask = false;
                });
        };
        $scope.getPlaceInfo();
        $scope.getFbId = function(){
            if(!$scope.place){
                return;
            }
            var url = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F"+$scope.place.linkfb.split('/')[3]+"&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=805201646226832";
            return url;
        };
        $scope.linkify = function(inputText) {
            var regex = new RegExp(
                "\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+",
                "g"
            );
            var output = inputText.replace(regex, function(m) {
                var match = m.replace(/ /g, '');
                return '<a href="tel:'+match+'">'+m+'</a>';
            })
            return output;
        };
        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
        $scope.options = {
            loop: false,
            effect: 'fade',
            speed: 500
        };

        $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
            // data.slider is the instance of Swiper
            $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
            console.log('Slide change is beginning');
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
            // note: the indexes are 0-based
            $scope.activeIndex = data.slider.activeIndex;
            $scope.previousIndex = data.slider.previousIndex;
        });
        $scope.sendComments = function(){
            $rootScope.showLoadingMask = true;
            if(!$scope.form.comments){
                $ionicPopup.alert({
                    title: 'Por favor, ingresa tu comentario'
                });
                // alert('Por favor, ingresa tu comentario');
                $rootScope.showLoadingMask = false;
                return;
            }
            $http.jsonp('http://infox.mx/apps/datos_incorrectos.php?idnum='+$stateParams.id+'&comentarios='+$scope.form.comments+'&jsoncallback=JSON_CALLBACK')
                .success(function (data) {
                    $ionicPopup.alert({
                        title: 'Atención',
                        template: 'Muchas gracias por tu reporte! Nos ayudas a mejorar.'
                    });
                    //alert('Muchas gracias por tu reporte! Nos ayudas a mejorar.');
                    $scope.form.comments = '';
                    $scope.closeIncorrect();
                })
                .error(function (data){
                    $scope.place = null;
                })
                .finally(function(data){
                    $rootScope.showLoadingMask = false;
                });
        };
        $scope.form = {comments: ''};
        $ionicModal.fromTemplateUrl('my-incorrect.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.incorrect = modal;
        });
        $scope.openIncorrect = function() {
            $scope.incorrect.show();
        };
        $scope.closeIncorrect = function() {
            $scope.incorrect.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.incorrect.remove();
        });
        $scope.clickedMethod = function(callback){
            $rootScope.form.searchQueryOutside = null;
            $state.go('tabs.search_outside', {search_query: callback.item.cadena});
        };
        $scope.shareAll = function(){
            $cordovaSocialSharing.share($scope.place.nombre, $scope.place.casa || $scope.place.otrosdatos, null, "http://www.infox.mx/datos2.php?id="+$stateParams.id);
        };
        $scope.getInfoxUrl = function(){
            return "http://www.infox.mx/datos2.php?id="+$stateParams.id;
        };

        $scope.record = function() {
            $scope.transcript = '';
            var popup = $ionicPopup.show({
                subTitle: '<div class="mic"><span class="mic-button"><div class="ring"></div><i' +
                ' class="icon ion-mic-a record-mic"></i></span></div>',
                template: '<div class="center transcript-text">{{transcript}} &nbsp;</div>',
                scope: $scope,
                buttons: [
                    {
                        text: 'Cancelar',
                        type: 'cancel-recording',
                        onclick: function () {
                            $scope.transcript = '';
                        }
                    }
                ]
            });

            window.plugins.SpeechRecognition.isRecognitionAvailable()
                .then(function (data) {
                console.log(data);
            });



            // var recognition = new webkitSpeechRecognition(); //To Computer
            var recognition = new SpeechRecognition(); // To Device
            console.log(recognition);
            if (!recognition) return;

            recognition.lang = 'es-MX';

            recognition.onresult = function (event) {
                if (event && event.results && event.results.length > 0) {
                    $scope.transcript = event.results[0][0].transcript;
                    // search for products
                    $scope.$apply();

                    $timeout(function () {
                        // $ionicPopup.close();
                        popup.close();
                        $state.go('tabs.search_outside',{search_query: $scope.transcript });
                    },700);
                }
            };

            recognition.start();

        };

            $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
                viewData.enableBack = true;
            });

            $scope.scrollTop = function () {
                if(!$scope.showInfo){
                    $ionicScrollDelegate.scrollTop();
                }
            }


        }]);
}());