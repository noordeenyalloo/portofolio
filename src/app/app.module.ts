import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './porto/about-me/about-me.component';
import { EducationComponent } from './porto/educations/education/education.component';
import { EducationsComponent } from './porto/educations/educations.component';
import { SkillsComponent } from './porto/skills/skills.component';
import { PortoServicesComponent } from './porto/porto-services/porto-services.component';
import { PortfolioComponent } from './porto/portfolio/portfolio.component';
import { ExperienceComponent } from './porto/experience/experience.component';
import { PortoServiceComponent } from './porto/porto-services/porto-service/porto-service.component';
import { RegisterComponent } from './users/register/register.component';
import { MainPageComponent } from './porto/main-page/main-page.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './porto/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationComponent,
    EducationsComponent,
    SkillsComponent,
    PortoServicesComponent,
    PortfolioComponent,
    ExperienceComponent,
    PortoServiceComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
