import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PortoServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
