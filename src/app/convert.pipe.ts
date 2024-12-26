import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(mile: number, targetUnit:string="Km"): any {
    if(!mile) return'';
    switch(targetUnit){
      case "Km":
        return mile*1.6 ;
      case "m":
        return mile*1.6*1000
      default :
        throw new Error("UnsupportedUnit"+targetUnit);

    }
  }

}
