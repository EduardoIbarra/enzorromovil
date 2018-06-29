import {Component, EventEmitter, ViewChild} from '@angular/core';
import {App, Content, Events, IonicPage, ModalController, Navbar, NavController, NavParams} from 'ionic-angular';
import {GlobalVariables} from '../../general/global-variables';
import {General} from '../../general/general';
import {AppService} from '../../services/services';
import {ChangeDetectorRef} from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing';
import {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TabsPage} from "../tabs/tabs";
import {Event} from "@angular/router";

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-place',
    templateUrl: 'place.html'
})
export class PlacePage {

    @ViewChild(Content) content: Content;
    @ViewChild(Navbar) navBar: Navbar;

    place: any = [];
    placeId;
    recentSearch: string;
    facebookLink: SafeResourceUrl;
    showData: boolean = false;
    show_full_phones: boolean = false;
    correctData: boolean = false;
    map: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public globalVariables: GlobalVariables,
                public general: General,
                public cd: ChangeDetectorRef,
                public app: App,
                public socialSharing: SocialSharing,
                public modalCtrl: ModalController,
                public sanitizer: DomSanitizer,
                public appService: AppService,) {
    }

    ionViewDidLoad() {
        // let ev: Event;
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //     let nav: any = this.app.getRootNavById('n4');
        //     console.log(this.globalVariables.nearbyTabActive);
        //     if(this.globalVariables.nearbyTabActive) {
        //         nav.setRoot(TabsPage, {search: this.general.getLastSearch(), tabIndex: 2}, {animate: false});
        //     }else{
        //         nav.setRoot(TabsPage, {search: this.general.getLastNearbySearch(), tabIndex: 1}, {animate: false});
        //     }
        //
        //     // this.navCtrl.pop();
        //     // e.stopImmediatePropagation();
        // };

        this.placeId = this.globalVariables.placeId;
        this.recentSearch = this.general.getLastSearch();
        this.getPlaceDetails();
    }

    getPlaceDetails() {
        this.general.presentLoadingMask();
        this.recentSearch = this.general.getLastSearch();
        this.appService.getPlaceDetails(this.placeId).subscribe((response) => {
            this.place = response.json();
            this.place.data = response.json().data[0];
            this.place.dishes = response.json().platillos;
            this.place.gallery = response.json().galeria;
            this.getFbLink();
            setTimeout(() => {
                if (this.place.data.latitud && this.place.data.longitud) {
                    this.loadMap(parseFloat(this.place.data.latitud), parseFloat(this.place.data.longitud));
                }
            }, 500);

            console.log(this.place);

            this.showData = true;
            this.general.dismissLoadingMask();
        }, (error) => {
            this.showData = true;
            this.general.dismissLoadingMask();
        });
    }

    openSearchModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        let modal = this.modalCtrl.create('SearchPlacePage');

        modal.present();
    }

    openSpeechModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        let modal = this.modalCtrl.create('SpeechModalPage');
        modal.present();
    }

    scrollTop() {
        this.content.scrollToTop(800);
    }

    share() {
        this.socialSharing.share(this.place.data.nombre, this.place.data.casa || this.place.data.otrosdatos, null, "http://www.infox.mx/datos2.php?id=" + this.place.data.idnum);
    }

    linkify(inputText) {
        let regex = new RegExp(
            "\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+",
            "g"
        );
        let output = inputText.replace(regex, function (m) {
            let match = m.replace(/ /g, '');
            return '<a href="tel:' + match + '">' + m + '</a>';
        });
        return output;
    };

    openIncorrect() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        let modal = this.modalCtrl.create('IncorrectModalPage', {placeId: this.place.data.idnum});
        modal.present();

        modal.onWillDismiss((data) => {
            if (data) {
                this.isCorrectData();
            }
        })
    }

    isCorrectData() {
        this.correctData = true;
        this.cd.detectChanges();
    }

    showDishes() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        let modal = this.modalCtrl.create('DishesModalPage', {dishes: this.place.dishes});
        modal.present();
    }

    loadMap(latitude, longitude) {
        let placeName = this.place.data.nombre;
        let latLng = new google.maps.LatLng(latitude, longitude);

        let mapOptions = {
            center: latLng,
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

        let map = new google.maps.Map(document.getElementById("placeMap"), mapOptions);
        google.maps.event.addListener(map, 'tilt_changed', function () {

            let marker = new google.maps.Marker({
                position: latLng,
                visible: true,
                icon: 'assets/img/markers/infox.png'

            });

            let infoWindow = new google.maps.InfoWindow({
                content: placeName
            });

            marker.setMap(map);

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });

        });
    }

    getFbLink() {
        if (this.place.data.linkfb) {
            let linkf: SafeResourceUrl = this.place.data.linkfb.split('/')[3];
            console.log(linkf);
            let url = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + linkf + "&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=361034541018618";
            // return this.sanitizer.bypassSecurityTrustResourceUrl(url);

            this.facebookLink = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            console.log(this.facebookLink);
        }
    }

    openGpsModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.general.presentLoadingMask();
        let modal = this.modalCtrl.create('GpsModalPage', {place: this.place.data});

        modal.present();
        this.general.dismissLoadingMask();
    }
}
