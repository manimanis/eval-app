import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private logService: LoginService) { }

  ngOnInit() {
    console.log(this.logService.serviceDomain);
  }

  loginUser() {
    this.logService
      .loginUser(this.username, this.password)
      .subscribe(data => console.log(data));
  }

}
