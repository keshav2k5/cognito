import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import {DashboardComponent } from './modules/dashboard/dashboard.component';
import {RegisterComponent} from './modules/auth/register/registration.component';
import {LoginComponent} from "./modules/auth/login/login.component";
import {ForgotPasswordStep1Component, ForgotPassword2Component} from "./modules/auth/forgot/forgot-password.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./modules/auth/confirm/confirm-registration.component";
import {ResendCodeComponent} from "./modules/auth/resend/resend-code.component";


import {AwsUtil} from './services/aws.service'
import {CognitoUtil,UserLoginService,UserParametersService,UserRegistrationService} from './services/cognito.service'
import {DynamoDBService} from './services/ddb.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationConfirmationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPassword2Component,
    RegisterComponent,
        
    DashboardComponent,
  
    RegisterComponent
  ],
  providers:[ CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }