import { Component } from '@angular/core';
import { BaseLogger } from '../common/logger';


@Component({
  templateUrl: './Homeapp.componentHome.html',
  styleUrls: ['./Homeapp.component.css'],
})
export class HomeComponent {
  constructor(log:BaseLogger) {
    log.Log("Error in Home Component");
  }
}
