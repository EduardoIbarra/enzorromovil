import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GlobalVariables} from "../../general/global-variables";
import {General} from "../../general/general";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {
    favorites: any[];
    api_url = 'http://infoxsoft.com/app/';
    user: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public globalVariables: GlobalVariables, public general: General) {
        if(globalVariables.loggedIn()) {
            this.getFavorites();
        }
    }
    getFavorites() {
        this.user = JSON.parse(localStorage.getItem('infox_user')).user;
        if(!JSON.parse(localStorage.getItem('infox_user'))) {
            return;
        }
        const favoritos = {
            id_usuario: this.user.id
        };
        const params = new HttpParams({
            fromObject: favoritos
        });
        this.httpClient.get(this.api_url+'consulta_favoritos.php', {params: params}).subscribe((data: any) => {
            this.favorites = data.favoritos_info;
            localStorage.setItem('my_favorites', JSON.stringify(data.negociosFav));
            console.log(data.negociosFav);
            if(data.error) {
                alert(data.error);
            }
        }, (error) => {
            console.log(error);
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad FavoritesPage');
    }
    ionViewDidEnter() {
        if(this.globalVariables.loggedIn()) {
            this.getFavorites();
        }
    }
    isLoggedIn() {
        return (JSON.parse(localStorage.getItem('infox_user')));
    }

    getUserName() {
        const user = JSON.parse(localStorage.getItem('infox_user')).user;
        return user.nombres + ' ' + user.apellidos;
    }

    goToLogin() {
        this.navCtrl.parent.select(4);
    }

    getPlaceDetails(placeId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        this.globalVariables.placeId = placeId;
        this.navCtrl.push('PlacePage');
    }

    getStarName2(starN, rate) {
        return (starN <= rate) ? 'star' : 'star-outline';
    }
}
