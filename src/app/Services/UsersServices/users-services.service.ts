import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../../../interfaces/Models/ilogin';
import { IPersonInfo } from '../../../interfaces/Models/iperson-info';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private URL = "http://localhost:52292/api/User"
  constructor(private http: HttpClient) { }

  AddUser(user: IPersonInfo): Observable<any> {

    var _URL = this.URL + '/Register';
    var result = this.http.post<IPersonInfo>(_URL, user, this.httpOptions).pipe();
    return result;

  }

  Login(login: ILogin): Observable<any> {

    var _URL = this.URL + '/Login';
    var result = this.http.post<IPersonInfo>(_URL, login, this.httpOptions).pipe();
    return result;

  }
}
