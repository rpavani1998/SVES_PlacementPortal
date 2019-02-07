import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user = new User();
  submitted = false;
  message = '';
  data: any;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private userService: UserService) { 
  }

login(){
  this.submitted = true;
  this.authenticate();
}

private authenticate(): void {
  console.log(this.user.id, this.user.password);
  this.userService.authenticate(this.user.id, this.user.password)
        .subscribe();
  }
}
