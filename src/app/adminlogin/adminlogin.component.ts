import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  adminLoginForm=this.fb.group({
    auname:[''],
    apsw:['']
  })

  constructor(private route:Router,private fb:FormBuilder, private med:MedService){}
  login(){
  this.med.adminLogin(this.adminLoginForm.value.auname,this.adminLoginForm.value.apsw)
  .subscribe({
    next:(result:any)=>{
      this.route.navigateByUrl("admin-home")
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })
  }

}
