import { NgModule } from '@angular/core';
import { PatientRoutingModule } from './Patientapp-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PatientComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
