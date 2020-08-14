import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binary'
})
export class BinaryPipe implements PipeTransform {

  transform(value: string): string {
    return value ? (Number(value)).toString(2) : ''
  }

}
