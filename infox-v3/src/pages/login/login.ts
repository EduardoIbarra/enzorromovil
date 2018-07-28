import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
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
    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public httpClient: HttpClient, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    }
    facebookLogin() {
        const loader = this.loadingCtrl.create({
            content: "Por favor espere...",
            duration: 3000
        });
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
                console.log('Logged into Facebook!', res);
                this.fbResponse = res;
                this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then((fbData) => {
                    const userObject:any = {
                        nombres: fbData.first_name,
                        apellidos: fbData.last_name,
                        email: fbData.email,
                        user_facebook_id: res.authResponse.userID,
                        facebook_object: JSON.stringify(res),
                        facebook_photo: fbData.picture_large.data.url
                    };
                    console.log(userObject);
                    this.registerFromFacebook(userObject).subscribe( (user: any) => {
                        alert('Ingresado con éxito');
                        localStorage.setItem('infox_user', JSON.stringify(user));
                        console.log(user);
                        this.user = user.user;
                        loader.dismissAll();
                    });
                    loader.dismissAll();
                });
            })
            .catch((e) => {
                console.log('Error logging into Facebook', e);
                loader.dismissAll();
            });
    }
    registerFromFacebook(fbOject) {
        const params = new HttpParams({
            fromObject: fbOject
        });
        return this.httpClient.get(this.api_url+'registro_facebook.php',
            {params: params});
    }
    emailLogin() {
        const loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        loader.present();
        const params = new HttpParams({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url+'login.php', {params: params}).subscribe((data: any) => {
            if(data.error) {
                alert(data.error);
            }else{
                this.user.password = null;
                this.user.password2 = null;
                localStorage.setItem('infox_user', JSON.stringify(data));
                let toast = this.toastCtrl.create({
                    message: 'Loggeado con éxito',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                loader.dismissAll();
            }
        }, (error) => {
            console.log(error);
            loader.dismissAll();
        });
    }
    emailRegister() {
        const loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        loader.present();
        const params = new HttpParams({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url+'registro_facebook.php', {params: params}).subscribe((data: any) => {
            if(data.error) {
                alert(data.error);
                loader.dismissAll();
                return;
            }
            let toast = this.toastCtrl.create({
                message: 'Registrado con éxito',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.operation = 'login';
            loader.dismissAll();
        }, (error) => {
            console.log(error);
            loader.dismissAll();
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
            this.user.password = null;
            this.user.password2 = null;
        }
    }
    updateProfile() {
        const loader = this.loadingCtrl.create({
            content: "Por favor espere...",
            duration: 3000
        });
        loader.present();
        const params = new HttpParams({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url+'editar_usuario.php', {params: params}).subscribe((data: any) => {
            if(data.error) {
                alert(data.error);
            }
            let toast = this.toastCtrl.create({
                message: 'Guardado con éxito',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            loader.dismissAll();
        }, (error) => {
            console.log(error);
            loader.dismissAll();
        });
    }
}
