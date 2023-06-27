import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homeapp.componentHome';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Patient', loadChildren:() =>
                    import('../PatientApp/Patientapp.module').
                    then(m=>m.PatientModule)},
  {path: 'Doctor', loadChildren:() =>
                    import('../DoctorApp/Doctorapp.module').
                    then(m=>m.DoctorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
