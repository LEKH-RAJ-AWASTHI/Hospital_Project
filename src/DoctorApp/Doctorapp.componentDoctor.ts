import { Component } from '@angular/core';
import { Doctor } from './Doctorapp.model';

@Component({
  templateUrl: './Doctorapp.componentDoctor.html',
  styleUrls: ['./Doctorapp.component.css'],
})
export class DoctorComponent {
  doctor: Doctor = new Doctor();
  doctorArr: Array<Doctor> = new Array<Doctor>();

  editDoctor(doctorSelected: Doctor) {
    this.doctor = new Doctor();
    this.doctor.age = doctorSelected.age;
    this.doctor.name = doctorSelected.name; //this is decoupling
    this.doctor.id = doctorSelected.id;
  }
  AddOrUpdateDoctor() {
    if (this.doctor.id == 0) { //new patient
      this.doctor.id = this.doctorArr.length + 1;
      this.doctorArr.push(this.doctor);
    }
    else { //update existing doctor
      this.doctorArr.forEach((element) => {
        if (element.id == this.doctor.id) {
          element.name = this.doctor.name;
          element.age = this.doctor.age;
        }

      });
    }
    this.doctor = new Doctor();
  }
  deleteDoctor(doctorSelected: Doctor) {
    this.doctorArr.forEach((element, index) => {
      if (element.id == doctorSelected.id) {
        this.doctorArr.splice(index, 1);
      }
    });
  }
}
