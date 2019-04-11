import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(  private userService: UserService) { 
  
  }
  data = []
  user = new User();

  ngOnInit() {
    const id = localStorage.getItem('currentUser');
      this.userService.getUser(id).subscribe(user => {
        this.user = user
      });
  }

}
