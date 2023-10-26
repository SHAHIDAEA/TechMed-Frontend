import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedService {

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

}
