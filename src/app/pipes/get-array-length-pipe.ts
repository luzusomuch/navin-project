import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrayLengthPipe'
})
export class GetArrayLengthPipe implements PipeTransform {

  transform(array: any): any {
    return array.length;
  }

}
