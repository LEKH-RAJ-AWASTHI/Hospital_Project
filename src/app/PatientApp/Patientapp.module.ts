import { NgModule } from '@angular/core';
import { PatientRoutingModule } from './Patientapp-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';
import { LoggerConsole, LoggerEmail } from '../common/logger';
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
  providers: [ // this is dependency injection (DI)
  // dependency injection provides Class to the component
  // we can use useClass, useValue, useFactory, useExisting
  // useClass is used to provide class to the component
  // useValue is used to provide value to the component
  // useFactory is used to provide factory to the component
  // useExisting is used to provide existing class to the component
  // dependency injection is used to achieve loose coupling
  // dependency injection is used to achieve inversion of control
  // dependency injection is used to achieve unit testing
  // dependency injection is used to achieve cross cutting concerns
  // dependency injection is used to achieve aspect oriented programming
  // dependency injection is used to achieve logging
  // dependency injection is used to achieve caching
  // dependency injection is used to achieve security
  // dependency injection is used to achieve transaction management
  // dependency injection is used to achieve exception handling
  // dependency injection is used to performance monitoring
  // dependency injection is used to achieve auditing
  // dependency injection is used to achieve profiling
  // dependency injection is used to achieve instrumentation
  // dependency injection is used to achieve concurrency
  // dependency injection is used to achieve internationalization
  // dependency injection is used to achieve localization
  // dependency injection is used to achieve validation
  // dependency injection is used to achieve data access
  // dependency injection is used to achieve business logic
  // dependency injection is used to achieve presentation logic
    {provide: 'BaseLogger', useClass: LoggerEmail},
    {provide: 'BaseLogger', useClass: LoggerConsole}
  ],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
