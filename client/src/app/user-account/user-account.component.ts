import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
import { UploadFileService } from '../services/file/file.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(  private userService: UserService,
    private uploadService: UploadFileService) { 
  
  }
  data = []
  user = new User();
  img_id = 'student'

  ngOnInit() {
    const id = localStorage.getItem('currentUser');
    this.uploadService.getFileById(id).subscribe(result =>{
      if(result.id == id){
        this.img_id = id;
    }
  });
      this.userService.getUser(id).subscribe(user => {
        this.user = user
      });
  }

  changeProfileImage(event){
    this.uploadService.deleteFile(localStorage.getItem('currentUser'));
    this.uploadService.pushFileToStorage(localStorage.getItem('currentUser'), event.target.files[0]).subscribe();

  }
  

}
