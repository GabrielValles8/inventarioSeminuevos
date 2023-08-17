import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img360'
})
export class ImgPipe implements PipeTransform {

  transform(images: string): any {
    let contenido = images.split(/\s+/).join('');

        return contenido;

  }

}