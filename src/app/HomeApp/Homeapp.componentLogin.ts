import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyToken } from '../common/Common-token';
import { Config } from '../common/Common-config';
import { Router } from '@angular/router';


@Component({
  templateUrl: './Homeapp.componentLogin.html',
  styleUrls: ['./Homeapp.component.css'],
})
export class LoginComponent {
  cred:Credentials=new Credentials();
  constructor(
    public http:HttpClient,
    public tk:MyToken,
    public config:Config,
    public route:Router
  ){

  }
  Login(){
    this.http.post(this.config.apiUrl+"Security",this.cred)
                  .subscribe(res=>this.Success(res)
                  ,res=>this.Error(res));
  }
  Success(res){
    this.tk.value=res.value;
    this.route.navigate(['/Home']);
  }
  Error(res){
    console.log(res);
  }

}

class Credentials{
  UserName: string="";
  Password: string="";
}
