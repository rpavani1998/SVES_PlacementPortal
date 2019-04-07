import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { JobType } from 'src/app/models/jobtype';
import { AddJob } from 'src/app/models/addjob';
import { JobPosts } from 'src/app/models/jobposts';
import { Branch } from 'src/app/models/branch';
import { College } from 'src/app/models/college';
import { EducationDetails } from 'src/app/models/notifications';
import { User } from 'src/app/models/user';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UserService } from 'src/app/services/user/user.service';
import { Student } from 'src/app/models/student';
import { ngxCsv } from 'ngx-csv/ngx-csv';



@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {

  company = new Company();
  job = new AddJob();
  jt = new JobType();
  jobposts = new JobPosts();
  submitted = false;
  selectedFiles: File;

  majors: Branch[]
  institute_university_names: College[]
  filters = new EducationDetails();
  userdata: User;

  data = [];


  constructor(
    private utilService: UtilsService,
    private notificationsService: NotificationsService,
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.utilService.getBranches().subscribe(major => {
      this.majors = major;
      console.log("Branches : ", major);

      this.utilService.getColleges().subscribe(institute_university_name => {
        this.institute_university_names = institute_university_name;
        console.log("Colleges : ", institute_university_name);
      })
    });


    this.Apply();    
  }

  user: User;
  student: Student;

  Apply() {
    var college = this.filters.institute_university_name;
    var major = this.filters.major;
    var percentage = this.filters.percentage;
    var passing_year = this.filters.passing_year; 
    var backlogs = this.filters.backlogs;
    var tenth_aggregate = this.filters.tenth_aggregate;
    var inter_aggregate = this.filters.inter_aggregate;


    this.notificationsService.getFilterData(college, major, percentage, passing_year, backlogs)
      .subscribe(
        filtereddata => {
          console.log("Filtered Data : ", filtereddata);
          filtereddata.forEach(data=> {
            this.userService.getUser(data.roll_no).subscribe(user => {
              data.user = user
            this.data.push(data)
            console.log("Data : " , data )
          }); 
        }
      );
  } 
      )}

  downloadExcel() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Student Data',
      useBom: true,
      noDownload: false,
      headers: ["ID", "Roll Number", "Degree", "Major", "University", "Board", "passing_year", "Percentage", "CGPA", "Backlogs" , "Email" , "Contact Number"]
    };

    new ngxCsv(this.data, 'StudentData', options);
  }

}