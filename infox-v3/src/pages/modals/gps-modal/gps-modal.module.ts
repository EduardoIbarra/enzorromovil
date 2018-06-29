import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GpsModalPage} from './gps-modal';

@NgModule({
    declarations: [
        GpsModalPage,
    ],
    imports: [
        IonicPageModule.forChild(GpsModalPage),
    ],
    exports: [
        GpsModalPage
    ]
})
export class GpsModalPageModule {
}
