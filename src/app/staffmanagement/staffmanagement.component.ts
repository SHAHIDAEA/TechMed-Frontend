import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffmanagement',
  templateUrl: './staffmanagement.component.html',
  styleUrls: ['./staffmanagement.component.css']
})
export class StaffmanagementComponent {


  constructor(private rout:Router){
 }

 backHome(){
  this.rout.navigateByUrl("admin-home")
 }

 addStaff(){
  this.rout.navigateByUrl("add-staff-details")
 }

}
