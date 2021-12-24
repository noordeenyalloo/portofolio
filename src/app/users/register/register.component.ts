import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ieducation } from '../../../interfaces/Models/ieducation';
import { Iexperience } from '../../../interfaces/Models/iexperience';
import { IImage } from '../../../interfaces/Models/iimage';
import { IPersonInfo } from '../../../interfaces/Models/iperson-info';
import { IPortofolio } from '../../../interfaces/Models/iportofolio';
import { IService } from '../../../interfaces/Models/iservice';
import { ISkill } from '../../../interfaces/Models/iskill';
import { ISocialMedia } from '../../../interfaces/Models/isocial-media';
import { UsersServicesService } from '../../Services/UsersServices/users-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmited: boolean = false;

  educations: Ieducation[] = [];
  experiences: Iexperience[] = [];
  images: IImage[] = [];
  personInfo: IPersonInfo;
  personInfos: IPersonInfo[] = [];
  portofolios: IPortofolio[] = [];
  services: IService[] = [];
  skills: ISkill[] = [];
  socialMedias: ISocialMedia[] = [];

  txtFatherName: string;
  txtGrandFatharName: string;
  txtFamilyName: string;
  txtPhoneNmber: string;
  txtEmail: string;
  txtSlogan: string;
  txtAboutMe: string;

  constructor(private userServices: UsersServicesService) { }

  ngOnInit(): void {
  }

  SavePerson(txtUsername,
    txtPassword,
    txtConfirmPassword,
    txtName,
    txtFatherName,
    txtGrandFatharName,
    txtFamilyName,
    txtPhoneNmber,
    dateBirthDate,
    ddlGender,
    txtEmail,
    txtSlogan,
    txtAboutMe
  ) {
    if (txtUsername == "" || txtPassword == "" || txtName == "" || txtFatherName == "" ||
      txtFamilyName == "" || txtPhoneNmber == "" || dateBirthDate == "" || txtEmail == "" ||
      txtAboutMe == "" || txtConfirmPassword != txtPassword)
    {
      this.isSubmited = true;
      return;
    }
    

    

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

  onSubmit(RegForm, isValidForm) {
    if (!isValidForm) {
      this.isSubmited = true;
      return;
    }

    this.personInfo = {
      Id: 0,
      Username: RegForm.txtUsername,
      Password: RegForm.txtPassword,
      Name: RegForm.txtName,
      FatharName: RegForm.txtFatherName,
      GrandFatharName: RegForm.txtGrandFatharName,
      FamilyName: RegForm.txtFamilyName,
      PhoneNmber: RegForm.txtPhoneNmber,
      BirthDate: RegForm.dateBirthDate,
      Gender: RegForm.ddlGender,
      Email: RegForm.txtEmail,
      Slogan: RegForm.txtSlogan,
      AboutMe: RegForm.txtAboutMe,
      CreatedBy: 0,
      CreationDate: new Date(),
      ModifiedBy: 0,
      ModifiedDate: new Date()
    }

    this.userServices.AddUser(this.personInfo).subscribe(res => {
      debugger;
      if (res.Status == true) {
        alert("the new user has been registered");
      }
    });
  }

}
