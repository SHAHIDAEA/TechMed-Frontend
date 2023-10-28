import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MedService } from '../med.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {


  constructor(private fb:FormBuilder,private med:MedService,private rout:Router){}
  patientloginForm=this.fb.group({
    pId:[''],
    phone:['']
  })

  patientLogin(){
this.med.patientlogin(this.patientloginForm.value.pId,this.patientloginForm.value.phone).subscribe({
  next:(result:any)=>{
    // console.log(result);
    
    alert(result.message)
    localStorage.setItem("patient",result._id)
    localStorage.setItem("pId",result.PId)
    this.rout.navigateByUrl("")
  },
  error:(result:any)=>{
    alert(result.error.message)
  }
})
  }
}
