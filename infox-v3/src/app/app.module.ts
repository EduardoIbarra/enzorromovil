import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {AppService} from '../services/services';
import {PlaceClasification} from '../services/place-clasification';
import {General} from '../general/general';
import {GlobalVariables} from '../general/global-variables';
import {OrderByPipe} from '../pipes/order-by/order-by';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Facebook} from '@ionic-native/facebook';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import {Diagnostic} from '@ionic-native/diagnostic';
import {OpenNativeSettings} from '@ionic-native/open-native-settings';
import {Keyboard} from '@ionic-native/keyboard'
import {TextToSpeech} from '@ionic-native/text-to-speech';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {Network} from '@ionic-native/network';
import {NetworkInterface} from '@ionic-native/network-interface';
import {HttpClientModule} from "@angular/common/http";
import {LoginPage} from "../pages/login/login";

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        IonicModule.forRoot(MyApp, {
            tabsHideOnSubPages: false,
            statusbarPadding: false
        }),
        IonicStorageModule.forRoot(),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        AppService,
        PlaceClasification,
        General,
        GlobalVariables,
        SpeechRecognition,
        SocialSharing,
        Facebook,
        NativeGeocoder,
        Diagnostic,
        OpenNativeSettings,
        OrderByPipe,
        Keyboard,
        TextToSpeech,
        LaunchNavigator,
        Network,
        PhotoViewer,
        NetworkInterface,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
