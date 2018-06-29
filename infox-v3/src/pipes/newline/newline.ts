import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'newline',
})
export class NewlinePipe implements PipeTransform {

    transform(value: string, ...args) {
        if (!value) return value;
        value = value.replace(new RegExp('\n', 'g'), "<br />");
        return value
    }
}
