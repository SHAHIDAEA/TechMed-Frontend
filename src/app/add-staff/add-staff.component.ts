import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {
constructor(private rout:Router,private fb:FormBuilder,private med:MedService){}
addstaffform=this.fb.group({
  docname:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
  specialization:['',[Validators.required,Validators.pattern('[a-zA-Z., ]+')]],
  about:['',[Validators.required,Validators.pattern('[a-zA-Z0-9., ]+')]],
    image:['',[Validators.required,Validators.pattern('[a-zA-Z0-9:/._-]+')]],
    education:['',[Validators.required,Validators.pattern('[a-zA-Z0-9., ]+')]],
    consultationfee:['',[Validators.required,Validators.pattern('[0-9]+')]],
    appointments:['',[Validators.required,Validators.pattern('[0-9]+')]],
    categoryId:['',[Validators.required,Validators.pattern('[0-9]+')]],
    slots_available:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

backtodetails(){
  this.rout.navigateByUrl("staff-management")
}

addnewstaff(){

  const path=this.addstaffform.value
  const bodyData={
    docname:path.docname,
    specialization:path.specialization,
    about:path.about,
    image:path.image,
    education:path.education,
    consultationfee:path.consultationfee,
    appointments:path.appointments,
    categoryId:path.categoryId,
    slots_available:path.slots_available
  }

  this.med.addstaff(bodyData).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.addstaffform.reset()
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })
}

}
