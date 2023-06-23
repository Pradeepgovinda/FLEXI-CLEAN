import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { OtpVerifyedComponent } from './auth/otp-verifyed/otp-verifyed.component';



const routes: Routes = [

  { path: '', component: SidenavComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
  // { path: 'orders', component: OrdersComponent },
  // { path: 'customers', component: CustomersComponent },
  // { path: 'wallet', component: WalletComponent },
  // { path: 'reports', component: ReportsComponent },
  // { path: 'settings', component: SettingsComponent },

  // { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'verifyed', component: OtpVerifyedComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
