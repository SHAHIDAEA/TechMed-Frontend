import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  //behaviorsubject
  search=new BehaviorSubject("")

  baseUrl="http://localhost:5000"

  constructor(private http:HttpClient) { }

  //api to admin login
  adminLogin(uname:any,psw:any){
    const body={
      uname,psw
    }
    return this.http.post(`${this.baseUrl}/admin/login`,body)
  }

  //api to add patient
  addPatient(pId:any,pname:any,age:any,sex:any,address:any,phone:any,doctorsName:any){
    const body={
      pId,pname,age,sex,address,phone,doctorsName
    }
    return this.http.post(`${this.baseUrl}/patients/add`,body)
  }

getPatientDetails(){
  return this.http.get(`${this.baseUrl}/patient/details/access`)
}

//api to edit patient details
editPatientDetails(id:any,bodyData:any){
  return this.http.put(`${this.baseUrl}/patient/details/update/${id}`,bodyData)
}

//api to get single patient
getpatient(id:any){
  return this.http.get(`${this.baseUrl}/singlepatient/details/access/${id}`)
}
//api to delete
deletePatient(id:any){
  return this.http.delete(`${this.baseUrl}/patient/details/delete/${id}`)
}

//api to add staff
addstaff(body:any){
  return this.http.post(`${this.baseUrl}/add/staff`,body)
}

//api to get staff details
getallStaff(){
  return this.http.get(`${this.baseUrl}/patient/access`)
}

//api to edit staff
editstaff(id:any,bodyData:any){
  return this.http.put(`${this.baseUrl}/staff/details/edit/${id}`,bodyData)
}

//api to get single staff data
getsinglestaff(id:any){
  return this.http.get(`${this.baseUrl}/singlestaff/${id}`)
}

//api to delete staff
deletestaff(id:any){
  return this.http.delete(`${this.baseUrl}/staff/details/delete/${id}`)

}

//api to patient-register
patientregister(pId:any,pname:any,age:any,sex:any,address:any,phone:any,doctorsName:any){
  const body={pId,pname,age,sex,address,phone,doctorsName}
  return this.http.post(`${this.baseUrl}/patient/register`,body)

}

//api to patient login
patientlogin(pId:any,phone:any){
  const body={pId,phone}
  return this.http.post(`${this.baseUrl}/patient/login`,body)
}

//api to slot booking
slotbooking(id:any){

  // return this.http.post(`${this.baseUrl}/appointment/booking/${id}`)
}
}
