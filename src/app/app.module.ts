import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { PatientmanagementComponent } from './patientmanagement/patientmanagement.component';
import { StaffmanagementComponent } from './staffmanagement/staffmanagement.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component'


@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    PatientmanagementComponent,
    StaffmanagementComponent,
    HeaderComponent,
    FooterComponent,
    AddStaffComponent,
    EditStaffComponent,
    AddPatientComponent,
    AppointmentsComponent,
    UserloginComponent,
    AdminHeaderComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
