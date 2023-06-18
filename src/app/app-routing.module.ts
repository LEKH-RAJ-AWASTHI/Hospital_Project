import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app.componentHome';
import { PatientComponent } from './app.componentPatient';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Patient', component: PatientComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
