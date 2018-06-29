import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {IncorrectModalPage} from './incorrect-modal';

@NgModule({
    declarations: [
        IncorrectModalPage,
    ],
    imports: [
        IonicPageModule.forChild(IncorrectModalPage),
    ],
    exports: [
        IncorrectModalPage
    ]
})
export class IncorrectModalPageModule {
}
