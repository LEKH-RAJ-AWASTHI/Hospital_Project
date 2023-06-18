import { Component } from '@angular/core';
import { Patient } from './app.model';

@Component({
  templateUrl: './app.componentPatient.html',
  styleUrls: ['./app.component.css'],
})
export class PatientComponent {
  patient: Patient = new Patient();
  patientArr: Array<Patient> = new Array<Patient>();
  isEditing: boolean = false;

  editPatient(patientSelected: Patient) {
    this.patient = new Patient();
    this.patient.age = patientSelected.age;
    this.patient.name = patientSelected.name; //this is decoupling
    this.patient.id = patientSelected.id;
  }
  AddOrUpdatePatient() {
    if (this.patient.id == 0) { //new patient
      this.patient.id = this.patientArr.length + 1;
      this.patientArr.push(this.patient);
    }
    else { //update existing patient
      this.patientArr.forEach((element) => {
        if (element.id == this.patient.id) {
          element.name = this.patient.name;
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
