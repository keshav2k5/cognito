import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {LoginComponent} from './modules/auth/login/login.component';
import {LogoutComponent,RegistrationConfirmationComponent} from './modules/auth/confirm/confirm-registration.component';
import {ResendCodeComponent} from './modules/auth/resend/resend-code.component';
import {RegisterComponent} from './modules/auth/register/registration.component';
import {ForgotPassword2Component,ForgotPasswordStep1Component} from './modules/auth/forgot/forgot-password.component';

export const ROUTES: Routes = [
  { path: '',      component: DashboardComponent },
   { path: 'Dashboard',component: DashboardComponent },
   {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent},
  {path: 'resendCode', component: ResendCodeComponent},
  {path: 'forgotPassword/:email', component: ForgotPassword2Component},
  {path: 'forgotPassword', component: ForgotPasswordStep1Component},
            
 
];