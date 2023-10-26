import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {
constructor(private rout:Router){}

backtodetails(){
  this.rout.navigateByUrl("staff-management")
}

}
