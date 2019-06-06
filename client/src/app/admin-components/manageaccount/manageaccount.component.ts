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
import { UploadFileService } from 'src/app/services/file/file.service';
import { ExcelFile } from 'src/app/models/files';
import * as XLSX from 'ts-xlsx';

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
  file = new ExcelFile();

  arrayBuffer: any;
  studentsData: File;


  constructor(
    private router: Router,
    private educationservice: NotificationsService,
    private utilService: UtilsService,
    private uploadService: UploadFileService,
    private usertypeService: UsertypeService,
    private userService: UserService
  ) { }


  userdata: User;
  usertype: UserType[];
  institute_university_names: College[];
  majors: Branch[];
  department = new Branch();
  college = new College();
  uid = '';

  ngOnInit() {
    uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          this.userdata = userdata;
          console.log("User Data : ", userdata);
        });

    this.usertypeService.getUserTypes()
      .subscribe(
        usertype => {
          this.usertype = usertype;
          console.log("USer Type : ", usertype);
        });

    this.utilService.getColleges().subscribe(institute_university_name => {
      this.institute_university_names = institute_university_name;
      console.log("Colleges : ", institute_university_name);
    })

    this.utilService.getBranches().subscribe(major => {
      this.majors = major;
      console.log("Branches : ", major);
    });

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.user_type_id);
          this.userdata = userdata;
        });
  }

  selectExcelFile(event) {
    this.studentsData = event.target.files[0];
  }

  upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log( "Excel : " , XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      XLSX.utils.sheet_to_json(worksheet, { raw: true }).forEach(student => {
        this.user.id = student['id']
        this.user.user_type_id = student['user_type_id']
        this.user.college_id = student['college_id']
        this.user.branch_id = student['branch_id']
        this.user.email = student['email'];
        this.user.password = student['password'];
        this.user.contact_number = student['contact_number'];
        this.user.sms_notification_active = student['sms_notification_active'];
        this.user.email_notification_active = student['email_notification_active'];
        this.user.user_image = student['user_image']
        this.utilService.addStudents(this.user).subscribe(students => {
          console.log("Students : ", students);
        })
      })
    }
    fileReader.readAsArrayBuffer(this.studentsData);
  }

  addAdmin() {
    this.userService.addUser(this.user)
      .subscribe();
    this.router.navigateByUrl('/manageaccount');
    window.location.reload();
  }

  addDept() {
    this.utilService.addBranch(this.department)
      .subscribe();
    this.router.navigateByUrl('/manageaccount');
    window.location.reload();
  }

  addCollege() {
    this.utilService.addCollege(this.college)
      .subscribe();
    this.router.navigateByUrl('/manageaccount');
    window.location.reload();
  }

  // changePassword() { 
  //   var id = localStorage.getItem('currentUser');
  //   this.file.uid = id;
  //   console.log("ID : " , this.file)
  //   this.utilService.changePassword(this.file.new_password , this.file.uid).subscribe(result => {
  //     console.log("Changed Password" , result)
  //   })
  // }

}