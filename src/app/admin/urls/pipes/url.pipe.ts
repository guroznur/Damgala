import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPipe'
})
export class UrlPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if(filterText == "" || filterText == null){
      return value;
    }

    return value.filter(p=>{
      const name = p.name.toLocalLowerCase().includes(filterText.toLocaleLowerCase())
      return (name)
    });
  }

}
