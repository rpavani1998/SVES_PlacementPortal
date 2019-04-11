import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.scss']
})
export class EditUserAccountComponent implements OnInit {

  constructor( private userService: UserService) { }

  data = []
  user = new User();
  
  ngOnInit() {
    const id = localStorage.getItem('currentUser');
    this.userService.getUser(id).subscribe(user => {
      this.user = user
    });
  }

}
