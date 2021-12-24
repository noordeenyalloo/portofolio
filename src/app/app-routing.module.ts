import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { MainPageComponent } from './porto/main-page/main-page.component';
import { LoginComponent } from './users/login/login.component';
import { AboutMeComponent } from './porto/about-me/about-me.component';
import { ProfileComponent } from './porto/profile/profile.component';


const routes: Routes = [
  { path: 'Signin', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
