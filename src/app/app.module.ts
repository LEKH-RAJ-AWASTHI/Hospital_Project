import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './app.componentMasterPage';
import { PatientComponent } from './app.componentPatient';
import { HomeComponent } from './app.componentHome';

@NgModule({
  declarations: [
    MasterPageComponent,
    PatientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
