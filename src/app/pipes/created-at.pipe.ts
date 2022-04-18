import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAt'
})
export class CreatedAtPipe implements PipeTransform {

  transform(value: any):any {
    let today: Date = new Date();
    return new Date(today.getFullYear(), today.getMonth(),today.getDate());
  }

}
