import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company_';
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
import { CompanyService } from 'src/app/services/company_/company.service';
import { StudentService } from '../../services/student/student.service';
import { JobpostsService } from 'src/app/services/jobposts/jobposts.service';
import { JobProcess } from 'src/app/models/jobprocess';




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
  placementreport = new Company();
  userdata: User;
  companyprofiles = {};
  jobprocess = {};

  data = [];


  constructor(
    private utilService: UtilsService,
    private notificationsService: NotificationsService,
    private userService: UserService,
    private companyService: CompanyService,
    private jobpostsService : JobpostsService,
    private studentService : StudentService
  ) { }

  ngOnInit() {

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.user_type_id);
          this.userdata = userdata;
        });

        this.utilService.getJobStages().subscribe(jobprocess => {
          jobprocess.forEach(jp => {
            this.jobprocess[jp.id] = jp.stage_name
          })
        })

    this.utilService.getBranches().subscribe(major => {
      this.majors = major;
      console.log("Branches : ", major);

      this.utilService.getColleges().subscribe(institute_university_name => {
        this.institute_university_names = institute_university_name;
        console.log("Colleges : ", institute_university_name);
      })
    });


    this.Apply(); 
    this.getCompany(); 
    this.getDepartment(); 
    this.getColleges(); 
  }

  collegedata : College[];
  getColleges() {
    return this.utilService.getColleges()
    .subscribe(
      collegedata => {
        console.log("College Data", collegedata)
        this.collegedata = collegedata;
      } 
    )
  }
  companydata : Company[];
   getCompany() {
    return this.companyService.getCompanyData()
    .subscribe(
      companydata => {
        console.log("Company Data" , companydata) 
        this.companydata = companydata;
        companydata.forEach(cd => {
          console.log(cd.company_id)
          this.companyService.getCompanyProfiles(cd.company_id).subscribe(result => {
            console.log("Company Profile : " , result)
            this.companyprofiles[cd.company_name] = [result[0].job_profile]
          }) 
        })
        console.log("Job Profiles : " , this.companyprofiles) 
      }
     );
   }

   branchdata : Branch[];
   getDepartment() {
     return this.utilService.getBranches()
     .subscribe(
        branchdata => {
          console.log("Branch Data", branchdata)
          this.branchdata = branchdata;
        }
     )
   }

  user: User;
  student: Student;

  refresh() {
    window.location.reload();
  }

  Apply() {
    var college = this.filters.institute_university_name;
    var major = this.filters.major;
    var percentage = this.filters.percentage;
    var passing_year = this.filters.passing_year; 
    var backlogs = this.filters.backlogs;
    var tenth_aggregate = this.filters.tenth_aggregate;
    var inter_aggregate = this.filters.inter_aggregate;

    this.placementreport;
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

  students = [];
  getfiltereddata() {
    
    if ( this.userdata.user_type_id == 'TPO' ) {
      this.jobpostsService.getJobProfile(this.job.job_profile).subscribe(jobid => {
        console.log("Job : " , jobid)
        this.studentService.getFilteredData( this.filters.passing_year , this.filters.major).subscribe(filtereddata => {
          filtereddata.forEach(student => {
            this.studentService.getPlacedStudents( student.roll_no, jobid[0].id).subscribe(student => {
              student.forEach(s => {
                // console.log(s)
                if (s.roll_no) { 
                  this.students.push(s)
                }
              })
            })
          })
        })      
    })
    console.log("Students : " , this.students) 
   } else {
    this.jobpostsService.getJobProfile(this.job.job_profile).subscribe(jobid => {
      console.log("Job : " , jobid)
      this.studentService.getFilteredData( this.filters.passing_year , this.userdata.branch_id).subscribe(filtereddata => {
        filtereddata.forEach(student => {
          this.studentService.getPlacedStudents( student.roll_no, jobid[0].id).subscribe(student => {
            student.forEach(s => {
              if (s.roll_no) {
                this.students.push(s)
              }
            })
          })
        })
      })      
  })
  }
  }


  downloadPlacementData() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.', 
      showLabels: true,
      showTitle: true,
      title: 'Student Placed Data - Company : ' + this.job.company_name + ' - Profile : ' + this.job.job_profile + ' - 01 - ' + this.jobprocess['01'] ,
      useBom: true,
      noDownload: false,
      headers: ["Roll Number", "Job ID", "Status"]
    };

    new ngxCsv(this.students, 'StudentData', options);
  }
}