import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedService } from '../med.service';

@Component({
  selector: 'app-staffsingleview',
  templateUrl: './staffsingleview.component.html',
  styleUrls: ['./staffsingleview.component.css']
})
export class StaffsingleviewComponent {

  pid: any = ""
  pdata: any = {}
  constructor(private ar: ActivatedRoute, private med: MedService,private rout:Router) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      this.med.getsinglestaff(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message
          console.log(this.pdata);
          
        }
      })
    })
  }

  bookstaffappointment(){
    if(localStorage.getItem('pId')){
      this.rout.navigateByUrl("book-appointment")

    // alert("appointment added")
    }
    else{
      alert("Please SignIn First")
      this.rout.navigateByUrl("user-login")
    }
  }
}
