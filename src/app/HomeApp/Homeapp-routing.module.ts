import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homeapp.componentHome';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // {path: 'register', component: RegisterComponent},
  {path: 'Home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Patient', loadChildren:() =>
                    import('../PatientApp/Patientapp.module').
                    then(m=>m.PatientModule)},
  // {path: 'Doctor', loadChildren:() =>
  //                   import('../DoctorApp/Doctorapp.module').
  //                   then(m=>m.DoctorModule)}
  // {path: 'signup', loadChildren:()=>
  //                   import('../components/regis')}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
