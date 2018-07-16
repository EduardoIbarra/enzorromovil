import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import {HttpClient, HttpParams} from "@angular/common/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    fbResponse: any = {};
    user: any = {};
    api_url = 'http://infoxsoft.com/app/';
    operation: string = 'login';
    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public httpClient: HttpClient, private toastCtrl: ToastController) {
    }
    facebookLogin() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
                console.log('Logged into Facebook!', res);
                this.fbResponse = res;
                this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then((fbData) => {
                    const userObject:any = {
                        nombre: fbData.first_name,
                        apellidos: fbData.last_name,
                        email: fbData.email,
                        user_facebook_id: res.authResponse.userID,
                        facebook_object: JSON.stringify(res),
                        facebook_photo: fbData.picture_large.data.url
                    };
                    this.registerFromFacebook(userObject).subscribe( (user) => {
                        alert('Ingresado con éxito');
                        localStorage.setItem('infox_user', JSON.stringify(user));
                    });
                });
            })
            .catch(e => console.log('Error logging into Facebook', e));
    }
    registerFromFacebook(fbOject) {
        const params = new HttpParams({
            fromObject: fbOject
        });
        return this.httpClient.get(this.api_url+'registro_facebook.php',
            {params: params});
    }
    emailLogin() {
        const params = new HttpParams({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url+'login.php', {params: params}).subscribe((data: any) => {
            if(data.error) {
                alert(data.error);
            }else{
                localStorage.setItem('infox_user', JSON.stringify(data));
                let toast = this.toastCtrl.create({
                    message: 'Loggeado con éxito',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emailRegister() {
        const params = new HttpParams({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url+'registro_facebook.php', {params: params}).subscribe((data: any) => {
            if(data.error) {
                alert(data.error);
            }
        }, (error) => {
            console.log(error);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    isLoggedIn() {
        if(JSON.parse(localStorage.getItem('infox_user'))) {
            this.user = JSON.parse(localStorage.getItem('infox_user')).user;
        }
        return (JSON.parse(localStorage.getItem('infox_user')));
    }
    logout() {
        if(confirm('Seguro que desea salir?')) {
            localStorage.removeItem('infox_user');
        }
    }

}
