import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, ModalController, Content, Refresher} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {GlobalVariables} from '../../general/global-variables';
import {General} from '../../general/general';
import {AppService} from '../../services/services';
import {PlaceClasification} from '../../services/place-clasification';
import {Network} from "@ionic-native/network";

declare var google: any;
declare var MarkerWithLabel: any;

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {

    @ViewChild(Content) content: Content;
    @ViewChild(Refresher) refresher: Refresher;

    form: any = {page: 1, listLabel: 0, item: null};
    userPosition: any = {latitude: null, longitude: null};
    markersArray: any = [];
    searchQuery: string = '';
    places: any = [];
    showData: boolean = false;
    dataError: boolean = false;
    records: number;
    map: any;
    recentSearch: string;
    enableRefresh = true;
    showReloadMessage:boolean = false;

    constructor(
        public navCtrl: NavController,
        public geolocation: Geolocation,
        public modalCtrl: ModalController,
        public globalVariables: GlobalVariables,
        public general: General,
        public placeClasification: PlaceClasification,
        public network: Network,
        public cd: ChangeDetectorRef,
        public appService: AppService,
    ) {
        //Get connection status on change
        this.network.onConnect().subscribe(data => {
            this.getPosition();
        }, error => console.error(error));

    }


    ionViewDidEnter(){
        if(this.places.length === 0 && this.globalVariables.isConnected){
            this.getPosition();
        }
    }
    refresh() {
        this.getPosition();
    }

    getPosition(): any {
        if (!this.globalVariables.isConnected) return;
        this.general.presentLoadingMask();
        this.showData = false;
        let options = {timeout: 10000, enableHighAccuracy: true};
        this.geolocation.getCurrentPosition(options).then(position => {
            this.userPosition.latitude = position.coords.latitude;
            this.userPosition.longitude = position.coords.longitude;
            this.loadMap(position.coords.latitude, position.coords.longitude);
            this.dataError = false;
        }).catch(error => {
            console.log(error);
            this.general.dismissLoadingMask();
            this.dataError = true;
            this.refresher.complete();
        })
    }

    loadMap(latitude, longitude) {
        console.log(latitude, longitude);

        let UserLatLng = new google.maps.LatLng(latitude, longitude);
        let mapOptions = {
            center: UserLatLng,
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

        let map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListener(map, 'tilt_changed', () => {

            let userMaker = new google.maps.Marker({
                position: UserLatLng,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'assets/img/markers/user.png',
                    scaledSize: new google.maps.Size(50, 55)
                }
            });

            let UserInfoWindow = new google.maps.InfoWindow({content: 'Estás aquí'});

            userMaker.setMap(map);

            UserInfoWindow.open(map, userMaker);

            //Events to show message
            google.maps.event.addListener(userMaker, 'click', function () {
                UserInfoWindow.open(map, userMaker);
            });

            this.map = map;
            this.getNearbyPlaces();
        });


        google.maps.event.addListener(map, 'dragstart', () => {
            this.refresher.complete();
            this.enableRefresh = false;
            this.cd.detectChanges()
        });

        google.maps.event.addListener(map, 'idle', () => {
            setTimeout(() => {
                this.enableRefresh = true;
                this.cd.detectChanges()
            }, 500)
        });
    }

    getNearbyPlaces() {
        this.showData = false;
        this.appService.getNearbyPlaces(this.userPosition.latitude, this.userPosition.longitude, this.form.page, this.searchQuery).subscribe((response) => {
            this.places = [];
            this.places = response.data || [];
            this.records = response.resultados;
            this.places = Object.keys(this.places).map(key => this.places[key]);
            this.places = this.placeClasification.sortClasification(this.places);

            this.showData = true;
            this.general.dismissLoadingMask();
            this.setPlacesMarkers(this.places);
            this.refresher.complete();
        }, (error) => {
            console.log(error);
            this.showData = true;
            this.refresher.complete();
            this.general.dismissLoadingMask();
        });
    }

    setPlacesMarkers(places) {
        let map = this.map;
        console.log(places);

        //Adjusting zoom dependig on the markers
        let bounds = new google.maps.LatLngBounds();

        // Adding item markers
        for (let i = 0; i < places.length; i++) {
            places[i].itemPosition = this.form.listLabel + (i + 1);

            let placeName = places[i].nombre;
            let itemPositionLabel = places[i].itemPosition;
            let marKerIcon = places[i].icon;
            let timeout = i * 300;

            let latLng = new google.maps.LatLng(parseFloat(places[i].latitud), parseFloat(places[i].longitud));

            //Drop marker one by one
            setTimeout(() => {
                let marker = new MarkerWithLabel({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    icon: 'assets/img/markers/' + marKerIcon,
                    labelAnchor: new google.maps.Point(10, 12),
                    labelInBackground: true
                });

                //Set place name to info window marker
                let infoWindow = new google.maps.InfoWindow({content: placeName});

                //Show name when click on marker icon
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);
                });

                //Delay on adding the label animation
                marker.labelContent = itemPositionLabel;

                //Adjusting label size
                if (itemPositionLabel > 99) {
                    marker.labelClass = "marker-label-lg";
                } else {
                    marker.labelClass = "marker-label";
                }

                //Save marker in array
                this.markersArray.push(marker);

            }, timeout);

            //Adjusting zoom dependig on the markers
            bounds.extend(latLng);
            if (places.length > 1) {
                bounds.extend(latLng);
                map.fitBounds(bounds);
                map.panToBounds(bounds);
                map.setCenter(bounds.getCenter());
            } else {
                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                    let extendPoint = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.02, bounds.getNorthEast().lng() + 0.02);
                    bounds.extend(extendPoint);
                }
                map.fitBounds(bounds);
                map.panToBounds(bounds);
                map.setCenter(bounds.getCenter());

            }
        }
    }

    changePage(changeTo) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        if (changeTo === 'home') {
            this.form.page = 1;
            this.form.listLabel = 0;
        }
        if (changeTo === 'prev') {
            this.form.page -= 1;
            this.form.listLabel -= 20;
        }
        if (changeTo === 'next') {
            this.form.page += 1;
            this.form.listLabel += 20;
        }

        this.content.scrollToTop(1000);
        //Remove old markers
        for (let i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray = [];

        this.getPosition();
    }

    backToNearby() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.form.page = 1;
        this.form.listLabel = 0;
        this.content.scrollToTop(1000);
        //Remove old markers
        for (let i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray = [];
        this.searchQuery = '';

        this.getPosition();
    }

    calculatePages() {
        return Math.floor(this.records / 15);
    };

    getPlaceDetails(placeId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.globalVariables.goBackToNearby = true;
        this.globalVariables.placeId = placeId;
        this.navCtrl.push('PlacePage');
    }

    openSearchModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        let modal = this.modalCtrl.create('SearchPlacePage', {samePage: true, placeholder: 'Busca cerca de ti...'});

        modal.present();

        modal.onDidDismiss((data) => {
            if (data) {
                console.log(data);
                this.searchNearbyPlaces(data);
            }
        })
    }

    searchNearbyPlaces(searchQuery) {
        this.general.presentLoadingMask();
        this.recentSearch = this.general.getLastNearbySearch();
        this.searchQuery = searchQuery;
        this.showData = false;
        this.form.page = 1;
        this.form.listLabel = 0;

        //Remove old markers
        for (let i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }

        this.content.scrollToTop(1000);
        this.getNearbyPlaces();

    }

    openSpeechModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        let modal = this.modalCtrl.create('SpeechModalPage', {samePageSearch: true});
        modal.present();

        modal.onWillDismiss((data) => {
            if (data) {
                console.log(data);
                this.searchNearbyPlaces(data);
            }
        })
    }
    isLoggedIn() {
        return (JSON.parse(localStorage.getItem('infox_user')));
    }
}
