import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedService } from '../med.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})
export class PatientregisterComponent {
patientregisterform=this.fb.group({
  pId:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
  age:['',[Validators.required,Validators.pattern('[0-9]+')]],
  sex:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  address:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]],
  phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  doctorsName:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]]

})

  constructor(private fb:FormBuilder,private med:MedService,private rout:Router){}
register(){
  var path=this.patientregisterform.value
  var pId=path.pId
  var pname=path.pname
  var age=path.age
  var sex=path.sex
  var address=path.address
  var phone=path.phone
  var doctorsName=path.doctorsName
  this.med.patientregister(pId,pname,age,sex,address,phone,doctorsName).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl("user-login")
    },
    error:(result:any)=>{
      alert(result.error.message)
      this.rout.navigateByUrl("user-login")

    }
  })

}

}
