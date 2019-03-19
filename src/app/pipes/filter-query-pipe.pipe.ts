import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQueryPipe'
})
export class FilterQueryPipePipe implements PipeTransform {

  transform(array: any, filterQuery?: any, filterParams: any = []): any {
    if (!filterQuery || !filterParams.length) {
      return array;
    }
    let result = []; 
    array.forEach(item => {
      filterParams.some(param => {
        if (item[param] && item[param].toString().search(filterQuery) !== -1) {
          result.push(item);
          return true;
        }
      });
    });
    return result;
  }

}
