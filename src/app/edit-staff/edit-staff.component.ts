import { Component } from '@angular/core';
import { MedService } from '../med.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent {

  pid:any=""
  sdata:any={}
constructor(private med:MedService,private rout:Router,private ar:ActivatedRoute){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
console.log(this.pid);

// this.med.getsinglestaff(this.pid).subscribe({
//   next:(result:any)=>{
//     // console.log(result);
    
//   }
  
// })
this.med.getsinglestaff(this.pid).subscribe({
  next:(result:any)=>{
    this.sdata=result.message
    console.log(this.sdata);
    
  }
})

})
}


backtodetails(){
  this.rout.navigateByUrl("staff-management")
}

updatestaff(){
  this.med.editstaff(this.pid,this.sdata).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl("staff-management")
    }
  })
}

}
