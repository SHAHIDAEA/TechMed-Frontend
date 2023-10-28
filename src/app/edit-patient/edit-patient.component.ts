import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {

  pid:any=""
  pdata:any={}
constructor(private rout:Router,private router:ActivatedRoute,private med:MedService){}

ngOnInit():void{
  this.router.params.subscribe((data:any)=>{
    this.pid=data.id

    this.med.getpatient(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })
  })
}

editpatientdetails(){
  this.med.editPatientDetails(this.pid,this.pdata).subscribe({
    next:(result:any)=>{
      alert(result.message)
    }
  })
}

  backtodetails(){
    this.rout.navigateByUrl("patient-management")
  }
  

}
