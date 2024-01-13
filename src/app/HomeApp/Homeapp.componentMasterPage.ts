import { Component } from '@angular/core';
import { Patient } from '../PatientApp/Patientapp.model';
import { BaseLogger } from '../common/logger';

@Component({
  selector: 'app-root',
  templateUrl: './Homeapp.componentMasterPage.html',
  styleUrls: ['./Homeapp.component.css'],
})
export class MasterPageComponent {
  constructor(log:BaseLogger) {
    log.Log("Error in Master Component");
  }
}
