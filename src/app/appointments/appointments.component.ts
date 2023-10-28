import { Component } from '@angular/core';
import { MedService } from '../med.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
staffs:any=[]
constructor(private med:MedService,private rout:Router){}

ngOnInit():void{
  this.med.getallStaff().subscribe({
    next:(result:any)=>{
this.staffs=result.message
    }
  })
}

backtodetails(){
this.rout.navigateByUrl("")
}
viewprofile(id:any){
  this.rout.navigateByUrl(`staff-single-view/${id}`)
}

appointment(){
  if(localStorage.getItem('pId')){
    this.rout.navigateByUrl("book-appointment")

  }
  else{
    alert("Please SignIn First")
    this.rout.navigateByUrl("user-login")
  }

}

}
