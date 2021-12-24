import { IBaseModel } from "./ibase-model";

export interface IPersonInfo extends IBaseModel {
  Username: string;
  Password: string;
  Name :string;
  FatharName :string;
  GrandFatharName :string;
  FamilyName: string;
  BirthDate: Date;
  Gender: string;
  PhoneNmber :string;
  Email:string;
  Slogan :string;
  AboutMe: string;
}
