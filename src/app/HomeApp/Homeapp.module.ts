import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './Homeapp-routing.module';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';
import { Config } from '../common/Common-config';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from './Homeapp.componentLogin';
import { MyToken } from '../common/Common-token';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AuthGuard } from '../common/common-AuthGuard';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Config, MyToken, HttpClient, AuthGuard],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
