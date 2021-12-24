import { Component, OnInit } from '@angular/core';
import { Ieducation } from '../../../interfaces/Models/ieducation';
import { Iexperience } from '../../../interfaces/Models/iexperience';
import { IImage } from '../../../interfaces/Models/iimage';
import { IPersonInfo } from '../../../interfaces/Models/iperson-info';
import { IPortofolio } from '../../../interfaces/Models/iportofolio';
import { IService } from '../../../interfaces/Models/iservice';
import { ISkill } from '../../../interfaces/Models/iskill';
import { ISocialMedia } from '../../../interfaces/Models/isocial-media';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  saveEduClicked: boolean = false;

  educations: Ieducation[] = [];
  experiences: Iexperience[] = [];
  images: IImage[] = [];
  personInfo: IPersonInfo;
  personInfos: IPersonInfo[] = [];
  portofolios: IPortofolio[] = [];
  services: IService[] = [];
  skills: ISkill[] = [];
  socialMedias: ISocialMedia[] = [];

  ngOnInit(): void {
  }

  

  SaveEducation(
    txtOrgName,
    txtOrgTitle,
    txtSpecialty,
    txtDegree,
    txtAppreciation,
    txtStartDate,
    txtEndDate,
    txtCertificate,
    txtGraduationProject,
    txtDescription) {
    if (txtOrgName == "" || txtOrgTitle == "" || txtSpecialty == "" || txtDegree == "" ||
      txtAppreciation == "" || txtStartDate == "" || txtEndDate == "" || txtCertificate == "" ||
      txtGraduationProject == "" || txtDescription == "") {
      this.saveEduClicked = true;
      return;
    }

  }

  SaveExperience(
    txtWorkplace,
    txtTitle,
    txtJobDescription,
    txtJobStartDate,
    txtJobEndDate) {

  }

  SaveImage(
    txtImageName,
    imgURI) {
  }

  SavePortofolio(
    txtProjectName,
    txtRole,
    txtProjectImage,
    txtProjectDescription,
    txtProjectLink) {

  }

  SaveService(
    txtServiceName,
    txtServiceIcon,
    txtServiceDescription) {

  }

  SaveSkill(
    txtSkillName,
    txtSkillIcon,
    txtSkillColorIcon,
    txtSkillDegree) {

  }



}
