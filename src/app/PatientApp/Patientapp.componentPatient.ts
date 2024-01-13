import { Component } from '@angular/core';
import { Patient } from './Patientapp.model';
import { BaseLogger } from '../common/logger';
import { HttpClient } from '@angular/common/http';
import { Config } from '../common/Common-config';

@Component({
  templateUrl: './Patientapp.componentPatient.html',
  styleUrls: ['./Patientapp.component.css'],
})
export class PatientComponent {
  patient: Patient = new Patient();
  patientArr: Array<Patient> = new Array<Patient>();
  isEditing: boolean = false;

    Submit(){
      if (this.patient.id == 0) { //new patient
        var patDTO:any= {};
        patDTO.name=this.patient.name;
        patDTO.age=this.patient.age;
        patDTO.code=this.patient.code;
        var observable= this.http.
        post(this.config.apiUrl,
        patDTO);
        observable.subscribe(res=>this.success(res),
        res=>this.error(res));
      }
      else { //update existing patient
        var patDTO:any= {};
        patDTO.id=this.patient.id; //we also have to send the id of the patient to the server
        patDTO.name=this.patient.name;
        patDTO.age=this.patient.age;
        patDTO.code=this.patient.code;
        var observable = this.http.put(this.config.apiUrl, patDTO);

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

  constructor(public http: HttpClient, public config:Config) {
    this.http.get(this.config.apiUrl).subscribe(res=>this.success(res),res=>this.error(res));
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
