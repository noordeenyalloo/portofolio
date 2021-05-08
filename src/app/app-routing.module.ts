import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { MainPageComponent } from './porto/main-page/main-page.component';


const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
