import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedService } from '../med.service';
import { StaffsingleviewComponent } from '../staffsingleview/staffsingleview.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {

  pId: any = ""
  pdata: any = {}
  sid:any=""
  sdata:any={}
  constructor(private rout: Router, private med: MedService,private fb:FormBuilder) { }

paymentform=this.fb.group({
  amount:['',[Validators.required,Validators.pattern('[0-9]+')]],
  bname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]+')]]
})

  ngOnInit(): void {

    if (localStorage.getItem("patient")) {
      this.pId =localStorage.getItem("patient")
      console.log(this.pId);
      

    }
    this.med.getpatient(this.pId).subscribe({
      next: (result: any) => {
        // console.log(result);

        this.pdata=result.message
        console.log(this.pdata);

      }
    })

    if(localStorage.getItem("sid")){
   this.sid=localStorage.getItem("sid")
    }
    this.med.getsinglestaff(this.sid).subscribe({
      next:(result:any)=>{
        this.sdata=result.message
        console.log(this.sdata);
        
      }
    })

  }
  return() {
    if(this.paymentform.valid){
      var click=1
      alert("Appointment Booked Successfully")
      this.sdata.slots_available=this.sdata.slots_available-click
      this.sdata.appointments=this.sdata.appointments+click
  
      this.rout.navigateByUrl("")
  
    }
}
}