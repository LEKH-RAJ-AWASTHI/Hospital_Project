import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalProject';
  name:string = "";
  age:number = 0;
  ClickMe(){

    alert("Hello " + this.name + " you are " + this.age + " years old.");
  }
}
