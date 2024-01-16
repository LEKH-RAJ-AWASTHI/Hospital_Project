import { Component } from '@angular/core';
import { Patient } from './Patientapp.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../common/Common-config';
import { MyToken } from '../common/Common-token';

@Component({
  templateUrl: './Patientapp.componentPatient.html',
  styleUrls: ['./Patientapp.component.css'],
})
export class PatientComponent {
  patient: Patient = new Patient();
  patientArr: Array<Patient> = new Array<Patient>();
  isEditing: boolean = false;
  httpOptions: any;
  token: string = this.tk.value;


  constructor(public http: HttpClient, public config: Config, public tk: MyToken) {
    // Initialize httpOptions in the constructor
    console.log("Token object:", this.token);


    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        // "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTGVraCIsInN1YiI6Ikxla2giLCJlbWFpbCI6IiIsIklzQWRtaW4iOiJUcnVlIiwianRpIjoiYzc2YjMyZjktNjNjNC00NjQwLTgzMTUtNTljNmMzM2ZmODE5IiwiZXhwIjoxNzA1MzcyNjg2LCJpc3MiOiJRdWVzdHBvbmQiLCJhdWQiOiJCcm93c2VyQ2xpZW50cyJ9.unRrP9qVdu9IeKlXWw4PQfGQCWEbVvfKlkWfByE2GF4`,  // Use this.tk.value directly
        "Authorization": "Bearer " + this.token // Use this.tk.value directly
      }),
    };

    this.http.get(this.config.apiUrl + "patient", this.httpOptions).subscribe(
      (res) => this.success(res),
      (res) => this.error(res)
    );
  }

    Submit(){
      var header_object = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization" : "Bearer "+this.tk.value,
      });
      const httpOptions= {
        headers: header_object
      }
      if (this.patient.id == 0) { //new patient
        var patDTO:any= {};
        patDTO.name=this.patient.name;
        patDTO.age=this.patient.age;
        patDTO.code=this.patient.code;
        var observable= this.http.
        post(this.config.apiUrl+"patient",
        patDTO, httpOptions);
        observable.subscribe(res=>this.success(res),
        res=>this.error(res));
      }
      else { //update existing patient
        var patDTO:any= {};
        patDTO.id=this.patient.id; //we also have to send the id of the patient to the server
        patDTO.name=this.patient.name;
        patDTO.age=this.patient.age;
        patDTO.code=this.patient.code;
        var observable = this.http.put(this.config.apiUrl+"patient",patDTO, httpOptions);

        observable.subscribe(res=>this.success(res),
        res=>this.error(res));

      }

    }
    success(res){
      this.patientArr=res;
      this.patient=new Patient();
      // alert("Connection Successfull to asp.net core");
      // console.log(res);
    }
    error(res){
      console.log("Error in the posting data"+res);
    }


  editPatient(patientSelected: Patient) {
    this.patient = new Patient();
    this.patient.age = patientSelected.age;
    this.patient.name = patientSelected.name; //this is decoupling
    this.patient.code = patientSelected.code;
    this.patient.id = patientSelected.id;
  }
  AddOrUpdate() {

    if (this.patient.id == 0) { //new patient
      this.patient.id = this.patientArr.length + 1;
      this.patientArr.push(this.patient);
    }
    else { //update existing patient
      this.patientArr.forEach((element) => {
        if (element.id == this.patient.id) {
          element.name = this.patient.name;
          element.code= this.patient.code;
          element.age = this.patient.age;
        }

      });
    }
    this.patient = new Patient();
  }
  deletePatient(patientSelected: Patient) {
    this.patientArr.forEach((element, index) => {
      if (element.id == patientSelected.id) {
        this.patientArr.splice(index, 1);
      }
    });
  }
}
