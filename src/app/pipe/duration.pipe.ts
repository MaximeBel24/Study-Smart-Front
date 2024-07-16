import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes : number): string {
    if (minutes < 60) {
      return minutes + 'm';
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return hours + 'h ' + remainingMinutes + 'm';
    }
  }

}
