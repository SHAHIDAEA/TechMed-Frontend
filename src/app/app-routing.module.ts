import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientmanagementComponent } from './patientmanagement/patientmanagement.component';
import { StaffmanagementComponent } from './staffmanagement/staffmanagement.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

const routes: Routes = [{path:"",component:UserhomeComponent},
{path:"admin-home",component:AdminhomeComponent},
{path:"admin-login",component:AdminloginComponent},
{path:"patient-management",component:PatientmanagementComponent},
{path:"staff-management",component:StaffmanagementComponent},
{path:"add-staff-details",component:AddStaffComponent},
{path:"edit-staff-details",component:EditStaffComponent},
{path:"add-patients",component:AddPatientComponent},
{path:"doc-appointments",component:AppointmentsComponent},
{path:"user-login",component:UserloginComponent},
{path:"edit-patient-details/:id",component:EditPatientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
