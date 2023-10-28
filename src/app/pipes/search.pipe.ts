import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray:any[],SearchString:string,datakey:string): any {

    const result:any=[]
    if(!dataArray || SearchString==''|| datakey==""){
      return dataArray
    }
    else{
      dataArray.forEach((item:any)=>{
        if(item[datakey].trim().toLowerCase().includes(SearchString.trim().toLowerCase())){
    result.push(item)
        }

      })
    }
    return result

  }

}
