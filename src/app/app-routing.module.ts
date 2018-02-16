import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
  // { path: '/ers/:username', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
