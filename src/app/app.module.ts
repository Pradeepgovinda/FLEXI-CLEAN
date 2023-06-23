import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { OtpVerifyedComponent } from './auth/otp-verifyed/otp-verifyed.component';




@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    LoginComponent,
    DashboardComponent,
    // HomeComponent,
    SidenavComponent,
    ForgotPasswordComponent,
    OtpVerifyedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

