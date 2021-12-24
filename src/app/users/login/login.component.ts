import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersServicesService } from '../../Services/UsersServices/users-services.service'
import { ILogin } from '../../../interfaces/Models/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmited: boolean = false;
  loginModel: ILogin;
  constructor(private router: Router, private services: UsersServicesService) { }

  ngOnInit(): void {
  }

  Register() {
    this.router.navigateByUrl('/Register');
  }

  Login(RegForm, IsValid) {
    debugger;
    if (!IsValid) {
      return;
    };
    this.loginModel = {
      username : RegForm.txtUsername,
      password : RegForm.txtPassword
    };

    this.services.Login(this.loginModel).subscribe(res => {
      if (res.Status == true) {
        debugger;
      }
    });

  }

}
