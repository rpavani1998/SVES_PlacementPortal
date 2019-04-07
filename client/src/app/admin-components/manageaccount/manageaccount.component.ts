import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EducationDetails } from 'src/app/models/notifications';
import { User } from 'src/app/models/user';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { UsertypeService } from 'src/app/services/usertype/usertype.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserType } from 'src/app/models/usertype';
import { College } from 'src/app/models/college';
import { Branch } from 'src/app/models/branch';
// import { NotificationsService } from '../notifications.service';
// import { UserService } from '../user.service';
// import { EducationDetails } from '../notifications';
// import { User } from '../user';
// import { UsertypeService } from '../usertype.service';
// import { UserType } from '../usertype';
// import { College } from '../college';
// import { UtilsService } from '../utils.service';
// import { Branch } from '../branch';


@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.scss']
})
export class ManageaccountComponent implements OnInit {

  educationdetails = new EducationDetails();
  user = new User();
  submitted = false;
  message: string;


  constructor(
    private router: Router,
    private educationservice: NotificationsService,
    private utilService: UtilsService,
    private usertypeService: UsertypeService,
    private userService: UserService
  ) { }


  userdata: User;
  usertype: UserType[];
  institute_university_names: College[];
  majors: Branch[];

  ngOnInit() {
    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          this.userdata = userdata;
          console.log("User Data : " , userdata);
        });

    this.usertypeService.getUserTypes()
      .subscribe(
        usertype => {
          this.usertype = usertype;
          console.log("USer Type : " , usertype);
        });

        this.utilService.getColleges().subscribe(institute_university_name => {
          this.institute_university_names = institute_university_name;
          console.log("Colleges : ", institute_university_name);
        })
   
        this.utilService.getBranches().subscribe(major => {
          this.majors = major;
          console.log("Branches : ", major);
        });
    
        
  }

  addAdmin () {
    this.userService.addUser(this.user) 
      .subscribe();
  }
}