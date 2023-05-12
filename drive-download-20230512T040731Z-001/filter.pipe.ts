import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.length===0 || filterString==='')
    {
      return value;
    }
    const users=[];
    for(const plist of value) 
    {
      if(plist['name']===filterString)
        {
          users.push(plist);

        }
    }
    return users;
  }

}
