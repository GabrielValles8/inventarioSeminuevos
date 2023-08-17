import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(agency: string): any {
    let agencyTrim = agency.trim();
    let sucursal = "";
    switch(agencyTrim){
      case 'RIVERO GUADALUPE':{
        sucursal = "GPE";
      }break;
      case 'RIVERO LINDA VISTA':{
        sucursal = "RLV";
      }break;
      case 'RIVERO ALIANZA AUTOMOTRIZ':{
        sucursal = "RAA"
      }break;
      case 'RIVERO SANTA CATARINA':{
        sucursal = "STA";
      }break;
      default:{
        sucursal = "otro";
      }

    }
    return sucursal;
  }

}
