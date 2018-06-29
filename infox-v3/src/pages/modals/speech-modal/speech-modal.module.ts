import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SpeechModalPage} from './speech-modal';
import {ProgressBarComponentModule} from "../../../components/progress-bar/progress-bar.module";

@NgModule({
    declarations: [
        SpeechModalPage,
    ],
    imports: [
        IonicPageModule.forChild(SpeechModalPage),
        ProgressBarComponentModule
    ],
    exports: [
        SpeechModalPage
    ]
})
export class SpeechModalPageModule {
}
