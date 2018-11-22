import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, AlertController, FabContainer, NavController, NavParams, ToastController, ViewController, Platform} from 'ionic-angular';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';
import {General} from '../../../general/general';
import SlidingMarker from "marker-animate-unobtrusive";
import {AppService} from '../../../services/services';
import {TextToSpeech, TTSOptions} from '@ionic-native/text-to-speech';
import {GlobalVariables} from "../../../general/global-variables";
import {Storage} from "@ionic/storage";
import {AppSelectionOptions, LaunchNavigator, LaunchNavigatorOptions, RememberChoiceOptions, PromptsOptions} from "@ionic-native/launch-navigator";

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-gps-modal',
    templateUrl: 'gps-modal.html',
})
export class GpsModalPage {

    place;
    placeAddress;
    userAddress;
    directions;
    showData: boolean = false;
    dataError: boolean = false;
    showUserAddress: boolean = false;
    gotNearby: boolean = false;
    isNearby: boolean = false;
    arrived: boolean = false;
    startDirection: boolean = false;
    mutedDirections: boolean = null;
    showInfoAlert: boolean = true;
    showOptions: boolean = true;
    speakCounter: number = 50;
    isAndroid: boolean = false;

    map: any;
    userMarker;
    coords;
    positionInterval;
    distance: any = '';
    duration: any = '';
    transportation: any = [{
        mode: 'driving',
        routeMode: 'DRIVING',
        name: 'Automóvil',
        icon: 'md-car'
    }, {
        mode: 'bicycling',
        routeMode: 'BICYCLING',
        name: 'Bicicleta',
        icon: 'md-bicycle'
    }, {
        mode: 'walking',
        routeMode: 'WALKING',
        name: 'Caminando',
        icon: 'md-walk'
    }];

    selectedTransportation: any = this.transportation[0];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public geolocation: Geolocation,
                public nativeGeocoder: NativeGeocoder,
                public viewCtrl: ViewController,
                public cd: ChangeDetectorRef,
                public appService: AppService,
                public alertCtrl: AlertController,
                public launchNavigator: LaunchNavigator,
                public toastCtrl: ToastController,
                public tts: TextToSpeech,
                public globalVariables: GlobalVariables,
                public platform: Platform,
                public storage: Storage,
                public general: General) {

        general.presentLoadingMask();
        this.place = navParams.get('place');
        this.placeAddress = this.place.domicilio || null;
        console.log(this.place);
        storage.get('hasSeenTakeMeThereTut').then((hasSeenTakeMeThereTut) => {
            if (!hasSeenTakeMeThereTut) {
                globalVariables.showTakeMeThereTut = true;
                setTimeout(() => {
                    globalVariables.showTakeMeThereTut = false;
                    storage.set('hasSeenTakeMeThereTut', true);
                }, 10000)
            }
        });
    }

    ionViewDidLoad() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        if (this.placeAddress === null) {
            this.getPlaceAddress();
        }
        this.getUserLocation();

        this.isAndroid = this.platform.is('android') || false;
    }

    closeModal() {
        this.viewCtrl.dismiss();
        clearInterval(this.positionInterval);
    }

    getPlaceAddress() {
        //Get place coords to get address
        this.nativeGeocoder.reverseGeocode(this.place.latitud, this.place.longitud).then((result: any) => {
            this.placeAddress = result.thoroughfare + ', ' + result.subLocality + ', ' + result.subAdministrativeArea;
        }).catch((error: any) => {
            console.log(error)
        });
    }

    getUserLocation() {
        let options = {timeout: 10000, enableHighAccuracy: true}
        this.geolocation.getCurrentPosition(options).then(position => {
            this.getUserAddress(position);
            this.loadMap(position.coords.latitude, position.coords.longitude);
        }).catch(error => {
            console.log(error);
            this.general.dismissLoadingMask();
            this.dataError = true;
        })
    }

    getUserAddress(position: Geoposition) {
        this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((result: any) => {
            this.showUserAddress = false;
            this.userAddress = result.thoroughfare + ', ' + result.subLocality + ', ' + result.subAdministrativeArea;
            this.showUserAddress = true;
        }).catch((error: any) => {
            console.log(error)
        });
    }

    loadMap(latitude, longitude) {
        let placeName = this.place.nombre;
        let userPosition = new google.maps.LatLng(latitude, longitude);
        let placePosition = new google.maps.LatLng(parseFloat(this.place.latitud), parseFloat(this.place.longitud));

        let mapOptions = {
            center: userPosition,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"hue": "#ff7700"}]}, {"featureType": "administrative", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#1d1d1d"}]
            }, {"featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}]}, {
                "featureType": "administrative.province",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ed5929"}, {"weight": "5.00"}, {"visibility": "on"}]
            }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#787878"}, {"visibility": "on"}]}, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]
            }, {"featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{"visibility": "on"}]}, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{"visibility": "on"}, {"color": "#2d2d2d"}]
            }, {"featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}, {"weight": "5.00"}]}, {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.fill",
                "stylers": [{"saturation": "64"}]
            }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#fafafa"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#2c2c2c"}]}, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#d5d5d5"}]
            }, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "on"}, {"color": "#ff0000"}]}, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#ed5929"}]
            }, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"weight": "5.00"}]}, {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ed5929"}, {"visibility": "on"}]
            }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]}, {"featureType": "road.highway", "elementType": "labels.text", "stylers": [{"color": "#ffffff"}]}, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#ffffff"}]
            }, {"featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#ed5929"}]}, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#d9d9d9"}, {"visibility": "on"}]
            }, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "simplified"}, {"lightness": "4"}, {"saturation": "-100"}]
            }, {"featureType": "water", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#e1e1e1"}, {"visibility": "on"}]}]
        };

        let map = new google.maps.Map(document.getElementById("gpsMap"), mapOptions);

        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: {
                strokeColor: "rgba(255, 104, 13, 0.6)",
                strokeWeight: 5
            }
        });

        directionsDisplay.setMap(map);

        //Create markers on position and icons
        this.userMarker = new SlidingMarker({
            // this.userMarker = new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            animation: google.maps.Animation.DROP,
            visible: true,
            icon: {
                url: 'assets/img/markers/user.png',
                scaledSize: new google.maps.Size(50, 55)
            }
        });

        //Set animation for marker
        this.userMarker.setDuration(2000);
        this.userMarker.setEasing('easeOutExpo');


        let placeMarker = new google.maps.Marker({
            position: {lat: parseFloat(this.place.latitud), lng: parseFloat(this.place.longitud)},
            animation: google.maps.Animation.DROP,
            visible: true,
            icon: {
                url: 'assets/img/markers/infox.png',
                scaledSize: new google.maps.Size(50, 55)
            }
        });


        //Set message con marker
        let placeInfo = new google.maps.InfoWindow({content: placeName});

        //Set markers on map
        this.userMarker.setMap(map);
        placeMarker.setMap(map);

        //Events to show message
        google.maps.event.addListener(placeMarker, 'click', function () {
            placeInfo.open(map, placeMarker);
        });

        google.maps.event.addListener(map, 'tilt_changed', function () {

            //Adjusting zoom dependig on the markers
            let bounds = new google.maps.LatLngBounds();


            //Set bounds for the markers
            bounds.extend(userPosition);
            map.fitBounds(bounds);
            map.panToBounds(bounds);
            map.setCenter(bounds.getCenter());

            bounds.extend(placePosition);
            map.fitBounds(bounds);
            map.panToBounds(bounds);
            map.setCenter(bounds.getCenter());


        });

        this.showData = true;
        this.general.dismissLoadingMask();
        this.updateUserMarker(directionsService, directionsDisplay);
        this.getDistance(latitude, longitude, parseFloat(this.place.latitud), parseFloat(this.place.longitud), this.selectedTransportation.mode);
        this.displayRoute(userPosition, placePosition, directionsService, directionsDisplay);
    }

    getDistance(userLat, userLng, placeLat, placeLng, mode) {
        this.appService.getGpsData(userLat, userLng, placeLat, placeLng, mode).subscribe((response) => {
            let data = response.json().rows[0].elements[0];
            this.checkDistance(data.distance.value);
            this.distance = data.distance.text;
            this.duration = data.duration.text;
        }, (error) => {
            console.log(error);
        });
    }

    checkDistance(distance) {
        if (distance <= 50) {
            this.arrived = distance <= 15 ? true : false;
            this.gotNearby = true;
            this.isNearby = true;
        } else {
            if (this.gotNearby) {
                this.isNearby = false;
            }
        }

        if (this.arrived) {
            this.presentToast('hasArrived');
        }
        if (this.isNearby && !this.arrived) {
            this.presentToast('almostThere');
        }
        if (this.gotNearby && !this.isNearby) {
            this.presentToast('passedDestination');
        }
    }

    presentToast(type) {
        let message;
        if (type == 'hasArrived') {
            message = '¡Has llegado a tu destino!';
            this.startDirection = false;
            this.showOptions = true;
        }

        if (type == 'almostThere') {
            message = '¡Ya casi llegas!';
        }

        if (type == 'passedDestination') {
            message = '¡Oops! Ya has pasado tu destino';
        }
        const toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        });

        toast.present();
    }

    changeTransportation(mode) {
        this.selectedTransportation = mode;
    }

    displayRoute(origin, destination, directionsService, directionsDisplay) {
        directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: this.selectedTransportation.routeMode
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                this.directions = response.routes[0].legs[0].steps[0].instructions;
                this.speakDirections(this.directions);
            } else {
                console.log('Ha ocurrido un error:  ' + status);
            }
        });
    }

    speakDirections(directions) {
        directions = this.cleanDirections(directions);
        directions = this.cleanDirections(directions);

        // console.log(directions);
        if (this.speakCounter >= 50 && this.startDirection && !this.mutedDirections) {
            console.log('speak');
            this.speakCounter = 0;

            let txtOptions: TTSOptions;

            if (this.isAndroid) {
                txtOptions = {
                    text: directions,
                    locale: 'es-MX',
                    rate: 0
                }
            } else {
                txtOptions = {
                    text: directions,
                    locale: 'es-MX',
                    rate: 1.5
                }
            }

            this.tts.speak(txtOptions).then(() => {
                console.log('Success');
                this.speakCounter = 0;
            }).catch((reason: any) => {
                console.log(reason);
                this.speakCounter = 0;
            });
        }

        this.speakCounter += 5;


    }

    cleanDirections(text) {
        text = text.replace(/<\/?[^>]+>/gi, "");
        text = text.replace(/(<style[^>]*) style=".*?"/ig, "");
        text = text.replace(/style=".*?"/ig, "");
        text = text.replace('Prof.', "Profesor");
        text = text.replace('Profra.', "Profesora");
        text = text.replace('Prol.', "Prolongación");
        text = text.replace('Av.', "Avenida");
        text = text.replace('Lib.', "Libramiento");
        text = text.replace('Blvd.', "Bulevar");
        text = text.replace('Pdte.', "Presidente");
        text = text.replace('Ing.', "Ingeriero");
        text = text.replace('Gral.', "General");
        text = text.replace('Lic.', "Licenciado");
        text = text.replace('Rep.', "República");
        text = text.replace('Art.', "Artículo");
        text = text.replace('Calz.', "Calzada");
        text = text.replace('Cd.', "Ciudad");
        text = text.replace('Hnos.', "Hermanos");
        text = text.replace('JAvenidaenidaer.', "Javier");
        text = text.replace('Esc.', "Escuela");
        text = text.replace('Nte.', "Norte");

        return text;
    }

    updateUserMarker(directionsService, directionsDisplay) {
        // //Test code
        // let ltt = 23.7314586;
        // let lnn =  -99.1647429;
        // let iiiiiii;
        // let PlacePosition = new LatLng(parseFloat(this.place.latitud), parseFloat(this.place.longitud));
        // this.positionInterval = setInterval(() => {
        //     iiiiiii = new google.maps.LatLng(ltt, lnn);
        //
        //     this.userMarker.setPosition({lat: ltt, lng: lnn});
        //     // this.getDistance(ltt, lnn, parseFloat(this.place.latitud), parseFloat(this.place.longitud), this.selectedTransportation.mode);
        //     this.getDistance(ltt, lnn, 23.735658468776144, -99.1624903678894, this.selectedTransportation.mode);
        //     this.displayRoute(iiiiiii, PlacePosition, directionsService, directionsDisplay);
        //
        //     ltt += 0.000040;
        //     lnn -= 0.00000;
        // }, 2000);

        // Real code
        this.positionInterval = setInterval(() => {
            let options = {timeout: 10000, enableHighAccuracy: true};
            this.geolocation.getCurrentPosition(options).then(position => {
                let NewUserPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let PlacePosition = new google.maps.LatLng(parseFloat(this.place.latitud), parseFloat(this.place.longitud));

                this.displayRoute(NewUserPosition, PlacePosition, directionsService, directionsDisplay);
                this.getDistance(position.coords.latitude, position.coords.longitude, parseFloat(this.place.latitud), parseFloat(this.place.longitud), this.selectedTransportation.mode);
                this.getUserAddress(position);

                //Update marker position
                this.userMarker.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
            }).catch(error => {
                console.log(error);
            });
        }, 2000)
    }

    stopDirections(fab: FabContainer) {
        fab.close();
        this.startDirection = false;
        this.showOptions = true;
    }

    startMutedDirections(fab: FabContainer) {
        fab.close();
        this.startDirection = true;
        this.mutedDirections = true;
        this.showOptions = false;
    }

    startSoundDirections(fab: FabContainer) {
        fab.close();
        this.startDirection = true;
        this.mutedDirections = false;
        this.showOptions = false;
    }

    directionsInfoAlert() {
        this.globalVariables.showTakeMeThereTut = false;
        if (this.showInfoAlert) {
            let alert = this.alertCtrl.create({
                title: 'Llevame Ahí',
                subTitle: 'Esta función te permite llegar a tu destino más facil. Selecciona la opción que desees.',
                buttons: [{
                    text: 'Empezar a usarlo',
                    handler: () => {
                        this.showInfoAlert = false;
                    }
                }]
            });

            alert.present();
        }
    }

    openNavigator() {
        let promtOptions: PromptsOptions = {
            headerText: '¿Recordar tu elección?',
            bodyText: '¿Usar la misma aplicación para navergar la próxima vez?',
            yesButtonText: 'Sí'
        };

        let rememberChoiceOptions: RememberChoiceOptions = {
            prompt: promtOptions
        };

        let appSelectionOptions: AppSelectionOptions = {
            dialogHeaderText: 'Selecciona aplicación para navegación',
            cancelButtonText: 'Cancelar',
            rememberChoice: rememberChoiceOptions
        };

        let launchNavigatorOptions: LaunchNavigatorOptions = {
            destinationName: this.place.nombre,
            appSelection: appSelectionOptions
        };

        this.launchNavigator.navigate([this.place.latitud, this.place.longitud], launchNavigatorOptions)
    }

}