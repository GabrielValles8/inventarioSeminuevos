import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoAuto'
})
export class TipoAutoPipe implements PipeTransform {

  transform(value: any): any {


    switch (value) {
      case 1:
          value = 'AUTO';
          break;
      case 2:
          value = 'SUV';
          break;
      case 3:
        value = 'PickUp / Van';
          break;
      case 4:
          value = 'Dep / Elec';
          break;
      default:
          value = "";
          break;
    }
  return value
  }

}
