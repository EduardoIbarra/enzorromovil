import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'remove-html',
})
export class RemoveHtmlPipe implements PipeTransform {

    transform(value: string) {
        if (value) {
            let result = value.replace(/<\/?[^>]+>/gi, ""); //removing html tag using regex pattern
            return result;
        }
        else {
        }


    }
}
