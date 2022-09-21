import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string) {
    if(value.length > 16){
      return value.substring(0, 17) + '...'
    }
    return value;
  }

}
