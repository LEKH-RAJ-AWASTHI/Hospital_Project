import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './Homeapp-routing.module';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';
import { BaseLogger, LoggerEmail } from '../common/logger';
import { Config } from '../common/Common-config';
import { RegisterComponent } from '../components/register/register.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [Config,
    {provide: BaseLogger, useClass: LoggerEmail},

  ],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
