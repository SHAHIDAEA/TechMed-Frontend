import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-patientmanagement',
  templateUrl: './patientmanagement.component.html',
  styleUrls: ['./patientmanagement.component.css']
})
export class PatientmanagementComponent {

  pdata:any=[]
  constructor(private route:Router,private med:MedService){
  }
 ngOnInit():void{
  this.med.getPatientDetails().subscribe({
    next:(result:any)=>{
      // console.log(result.message);
      this.pdata=result.message
    }
  })
 }
  backHome(){
   this.route.navigateByUrl("admin-home")
  }

  addpatient(){
    this.route.navigateByUrl("add-patients")
  }  
  edit(id:any){
    this.route.navigateByUrl(`edit-patient-details/${id}`)
  }
 
}
