import {Component} from '@angular/core';
import {IonicPage, NavController, ModalController, App} from 'ionic-angular';
import {AppService} from '../../services/services';
import {GlobalVariables} from '../../general/global-variables';
import {General} from '../../general/general';
import {TabsPage} from "../tabs/tabs";
import {NetworkInterface} from "@ionic-native/network-interface";
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    advertisement: any;
    constructor(public navCtrl: NavController,
                public appService: AppService,
                public globalVariables: GlobalVariables,
                public networkInterface: NetworkInterface,
                public general: General,
                public app: App,
                public modalCtrl: ModalController,) {



        // //Get initial network state checking for an ip address
        this.networkInterface.getIPAddress().then((ip)=>{
            this.globalVariables.isConnected = true;
        },(error)=>{
            //this.globalVariables.isConnected = false;
            this.globalVariables.isConnected = true;
        });


        this.advertisement = {
            img: null,
            enlace: null,
            idnegocio: null,
            url: null
        };

    }

    ionViewWillLoad() {
        this.getAdvertisement();
    }

    getAdvertisement() {
        this.appService.getAdvertisement().subscribe(
            (response) => {
                this.advertisement = response.json().data[0];
                console.log(this.advertisement);
            },
            (error) => {
                console.log(error);
                this.advertisement = {
                    img: null,
                    enlace: null,
                    idnegocio: null,
                    url: null
                };
            }
        );
    }

    openSearchModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        let modal = this.modalCtrl.create('SearchPlacePage', {samePage: true});

        modal.present();

        modal.onWillDismiss((data) => {
            if (data) {
                // console.log(data);
                let nav: any = this.app.getRootNavById('n4');
                nav.setRoot(TabsPage, {search: data, tabIndex: 3}, {animate: false});
            }
        })
    }

    goToPlaceDetails(PlaceId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.globalVariables.placeId = PlaceId;

        let nav: any = this.app.getRootNavById('n4');
        nav.setRoot(TabsPage, {tabIndex: 2, goToPlace: true}, {animate: false});
    }

    openSpeechModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        let modal = this.modalCtrl.create('SpeechModalPage');
        modal.present();
    }

    get() {
        this.general.getLocationPermission();
    }

    go() {
        this.navCtrl.push('SpeechModalPage')
    }

    isLoggedIn() {
        return (JSON.parse(localStorage.getItem('infox_user')));
    }

    getUserName() {
        const user = JSON.parse(localStorage.getItem('infox_user')).user;
        return user.nombres + ' ' + user.apellidos;
    }

    goToLogin() {
        this.navCtrl.setRoot(LoginPage);
    }
}

