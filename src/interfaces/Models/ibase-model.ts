import { Data } from "@angular/router";

export interface IBaseModel {
  Id: number;
  CreatedBy: number;
  CreationDate: Date;
  ModifiedBy: number;
  ModifiedDate: Data;
}
