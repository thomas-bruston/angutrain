import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ago',standalone :true
})
export class AgoPipe implements PipeTransform {

  transform(date: Date): string {
    const diff = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    return `il y a ${diff} jours`;

  }

}
