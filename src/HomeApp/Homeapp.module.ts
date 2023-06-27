import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './Homeapp-routing.module';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
