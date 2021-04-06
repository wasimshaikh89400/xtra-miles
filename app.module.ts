import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2TelInputModule} from 'ng2-tel-input'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import{HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { WelcomeUserComponent } from './welcomeUser/welcome-user.component'
import { ServiveService} from '../app/Services/servive.service'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerifyOtpComponent,
    WelcomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    Ng2TelInputModule,
    HttpClientModule,

  ],
  providers: [ServiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
