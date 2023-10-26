import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
constructor(private rout:Router,private fb:FormBuilder,private med:MedService){}

addpatientForm=this.fb.group({
  pId:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
  age:['',[Validators.required,Validators.pattern('[0-9]+')]],
  sex:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  address:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]],
  phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  doctorsName:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]]
})

addpatient(){
  // console.log(this.addpatientForm.value.pId);
  var path=this.addpatientForm.value
  var pId=path.pId
  var pname=path.pname
  var age=path.age
  var sex=path.sex
  var address=path.address
  var phone=path.phone
  var doctorsName=path.doctorsName
  if(this.addpatientForm.valid){
    // alert("valid")
    this.med.addPatient(pId,pname,age,sex,address,phone,doctorsName).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.addpatientForm.reset()
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
  }
  else{
    alert("Invalid Form")
  }
}
  backtodetails(){
    this.rout.navigateByUrl("patient-management")
  }
  
}
