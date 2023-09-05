import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentsModule } from '../main-components/main-components.module';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
// import { CandidateServicesComponent } from './candidate-services/candidate-services.component';
// import { CompanyServicesComponent } from './company-services/company-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { UseGuidesComponent } from './use-guides/use-guides.component';
import { AuthModule } from '@angular/fire/auth';
import { MatSelectModule } from '@angular/material/select';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    HomeComponent,
    // CandidateServicesComponent,
    // CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent,
    MeetUsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainComponentsModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MatSelectModule,
    
  ],
  exports: [
    HomeComponent,
    // CandidateServicesComponent,
    // CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent
  ]
})
export class ViewsModule { }
