import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homeapp.componentHome';
import { LoginComponent } from './Homeapp.componentLogin';
import { AuthGuard } from '../common/common-AuthGuard';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // {path: 'register', component: RegisterComponent},
  {path: 'Home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'Patient', loadChildren:() =>
                    import('../PatientApp/Patientapp.module').
                    then(m=>m.PatientModule), canActivate: [AuthGuard]},
  // {path: 'Doctor', loadChildren:() =>
  //                   import('../DoctorApp/Doctorapp.module').
  //                   then(m=>m.DoctorModule)}
  // {path: 'signup', loadChildren:()=>
  //                   import('../components/regis')}
  {path: 'login', component: LoginComponent},
  // {path: 'login', loadChildren:()=>
  //                   import('../login/login.module').
  //                   then(m=>m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
