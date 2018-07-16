import {Component} from '@angular/core';
import {Config, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {GlobalVariables} from "../general/global-variables";
import {Storage} from "@ionic/storage";
import {Keyboard} from '@ionic-native/keyboard';
import {Network} from "@ionic-native/network";
import {General} from "../general/general";
import { NetworkInterface } from '@ionic-native/network-interface';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    hasSeenTut: boolean;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        config: Config,
        public globalVariables:GlobalVariables,
        public network:Network,
        public general:General,
        public networkInterface:NetworkInterface,
        public storage:Storage,
        private keyboard:Keyboard,
    ) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.backgroundColorByHexString('#ff6000');
            config.set('ios', 'backButtonText', 'Atrás');

            this.keyboard.hideKeyboardAccessoryBar(false);

            storage.get('hasSeenTut').then((hasSeenTut) => {
                if (!hasSeenTut) {
                    globalVariables.showNearbyTut = true;
                    setTimeout(() => {
                        globalVariables.showNearbyTut = false;
                        storage.set('hasSeenTut', true);
                    }, 15000)
                }
            });


            //Get connection status on change
            this.network.onConnect().subscribe(data => {
                console.log(data);
                this.general.displayNetworkUpdate(data.type);
                this.globalVariables.isConnected = true;
            }, error => console.error(error));

            this.network.onDisconnect().subscribe(data => {
                console.log(data);
                this.general.displayNetworkUpdate(data.type);
                // this.globalVariables.isConnected = false;
                this.globalVariables.isConnected = true;
            }, error => console.error(error));

            this.rootPage = TabsPage;
            splashScreen.hide();
        });
    }
}