import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient, HttpParams} from "@angular/common/http";

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
    constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
        const favoritos = {
            id_usuario: '3017'
        };
        const params = new HttpParams({
            fromObject: favoritos
        });
        this.httpClient.get(this.api_url+'consulta_favoritos.php', {params: params}).subscribe((data: any) => {
            this.favorites = data.favoritos_info;
            console.log(this.favorites);
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

}
