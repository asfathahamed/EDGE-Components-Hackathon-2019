import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({'name': 'sortTable'})
export class SortPipe implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        });
        return array;
      }
}
