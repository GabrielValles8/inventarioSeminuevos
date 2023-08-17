import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(day: any): any {

    if (day == null){
      return 0;
    } else {
      let fechaI = new Date(day.split(" ")[0]).getTime()
      let today: any = new Date();
      let calc: any = today - fechaI;
      let diff = Math.round(calc/(1000*60*60*24))
      diff < 0 ? diff = 0: '';
      return diff;
    }

  }

}
