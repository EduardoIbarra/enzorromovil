import { NgModule } from '@angular/core';
import {CapitalizePipe} from "./capitalize/capitalize";
import {NewlinePipe} from "./newline/newline";
import {OrderByPipe} from "./order-by/order-by";
import {RemoveHtmlPipe} from "./remove-html/remove-html";
import {SafePipe} from "./safe/safe";


@NgModule({
    declarations:[
        CapitalizePipe,
        NewlinePipe,
        OrderByPipe,
        RemoveHtmlPipe,
        SafePipe
    ],
    imports: [

    ],
    exports:[
        CapitalizePipe,
        NewlinePipe,
        OrderByPipe,
        RemoveHtmlPipe,
        SafePipe
    ]
})

export class PipeModule{}