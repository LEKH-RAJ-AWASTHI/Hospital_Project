import { NgModule } from '@angular/core';
import { DoctorRoutingModule} from './Doctorapp-routing.module';
import { FormsModule } from '@angular/forms';

import { DoctorComponent } from './Doctorapp.componentDoctor';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DoctorComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DoctorComponent]
})
export class DoctorModule { }
