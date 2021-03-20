import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: null | any[], key: string, direction: number): any[] | null {
    if (!Array.isArray(value) || !key) {
      return value;
    }
    return value.sort((a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return direction * (a[key] - b[key]);
      }
      const aString: string = ('' + a[key]).toLowerCase();
      const bString: string = ('' + b[key]).toLowerCase();
      return direction * aString.localeCompare(bString);
    });
  }
}
