import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(mile: number, ...args: unknown[]): unknown {
    return mile*1.6 ;
  }

}
