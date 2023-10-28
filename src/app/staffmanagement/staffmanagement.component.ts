import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-staffmanagement',
  templateUrl: './staffmanagement.component.html',
  styleUrls: ['./staffmanagement.component.css']
})
export class StaffmanagementComponent {

sdata:any=[]
  constructor(private rout:Router,private med:MedService){
 }


 ngOnInit(): void{
this.med.getallStaff().subscribe({
  next:(result:any)=>{
    // console.log(result);
    this.sdata=result.message
    
  }
})
 }


 backHome(){
  this.rout.navigateByUrl("admin-home")
 }

 addStaff(){
  this.rout.navigateByUrl("add-staff-details")
 }
 edit(id:any) {
  this.rout.navigateByUrl(`edit-staff-details/${id}`)
}

deletestaff(id:any){
this.med.deletestaff(id).subscribe({
  next:(result:any)=>{
    alert(result.message)

    this.med.getallStaff().subscribe({
      next:(result:any)=>{
        this.sdata=result.message
      }
    })
  }
})
}


}
