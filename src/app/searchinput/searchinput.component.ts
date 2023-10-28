import { Component } from '@angular/core';
import { MedService } from '../med.service';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.css']
})
export class SearchinputComponent {
   searchstring:any=""

constructor(private med:MedService){}
   accessdata(event:any){
    this.searchstring=event.target.value
    // console.log(this.searchstring);
    this.med.search.next(this.searchstring)
   }
}
