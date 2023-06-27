import { NgModule } from '@angular/core';
import { PatientRoutingModule } from './Patientapp-routing.module';
import { FormsModule } from '@angular/forms';

import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PatientComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
