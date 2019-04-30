import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company_';
import { AddJob } from 'src/app/models/addjob';
import { JobProcess } from 'src/app/models/jobprocess';
import { JobType } from 'src/app/models/jobtype';
import { JobPosts } from 'src/app/models/jobposts';
import { JobStage } from 'src/app/models/jobstage';
import { Branch } from 'src/app/models/branch';
import { College } from 'src/app/models/college';
import { EducationDetails } from 'src/app/models/notifications';
import { User } from 'src/app/models/user';
import { AddjobService } from '../../services/addjob/addjob.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company_/company.service';
import { JobpostsService } from 'src/app/services/jobposts/jobposts.service';
import { JobTypeService } from 'src/app/services/jobtype/jobtype.service';
import { UploadFileService } from 'src/app/services/file/file.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { StudentService } from 'src/app/services/student/student.service';
import { UserService } from 'src/app/services/user/user.service';
import { Student } from 'src/app/models/student';
// import { JobTypeService } from '../jobtype.service';
// import { JobpostsService } from '../jobposts.service';
// import { JobPosts } from '../jobposts';
// import { Company } from '../company';
// import { AddJob } from '../addjob';
// import { Router } from "@angular/router";
// import { UploadFileService } from '../file.service';
// import { Branch } from '../branch';
// import { JobStage } from '../jobstage';
// import { UtilsService } from '../utils.service';
// import { CompanyService } from '../company.service';
// import { JobType } from '../jobtype';
// import { EducationDetails } from '../notifications'
// import { College } from '../college';
// import { NotificationsService } from '../notifications.service';
// import { UserService } from '../user.service';
// import { StudentService } from '../student.service';
// import { Student } from '../student';
// import { ActivatedRoute, Params } from '@angular/router';
// import { ngxCsv } from 'ngx-csv/ngx-csv';
// import { User } from '../user';
// import { JobProcess } from '../jobprocess';


@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class AdminInternshipsComponent implements OnInit {
  company = new Company();
  job = new AddJob();
  jobprocess = new JobProcess();
  jt = new JobType();
  jobposts = new JobPosts();
  submitted = false;
  selectedFiles: File;

  jobstage: JobStage[];
  majors: Branch[]
  institute_university_names: College[]
  filters = new EducationDetails();
  userdata = new User();

  data = [];
  closeddata = []



  constructor(
    private addjobService: AddjobService,
    private router: Router,
    private companyService: CompanyService,
    private jobpostsService: JobpostsService,
    private jobtypeService: JobTypeService,
    private uploadService: UploadFileService,
    private utilService: UtilsService,
    private notificationsService: NotificationsService,
    private studentService: StudentService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  addCompany() {
    this.submitted = true;
    this.saveCompany();
  }

  newJob(): void {
    this.submitted = false;
    this.job = new AddJob();
  }


  addJob() {
    this.submitted = true;
    this.saveJob();
    this.saveJobProcess();
  }

  ngOnInit(): void { 
    this.getJobType();
    this.getJobPosts();
    this.getCompany();

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.user_type_id);
          this.userdata = userdata;
        });

    this.utilService.getBranches().subscribe(major => {
      this.majors = major;
      console.log("Branches : ", major);

      this.utilService.getColleges().subscribe(institute_university_name => {
        this.institute_university_names = institute_university_name;
        console.log("Colleges : ", institute_university_name);
      })
    });

    this.utilService.getJobStages().subscribe(jobstage => {
      this.jobstage = jobstage;
      console.log("Job Stage : ", jobstage); 
    })

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.user_type_id);
          this.userdata = userdata;
        });


  }

     companydata : Company[];
   getCompany() {
    return this.companyService.getCompanyData()
    .subscribe(
      companydata => {
        console.log("Company Data" , companydata)
        this.companydata = companydata;
      }
     );
   }



   selectCompanyImage(event){
    this.company.company_image = event.target.files[0];
   }


  user: User;
  student: Student;

  jobpost: JobPosts[];
  getJobPosts() {
    return this.jobpostsService.getJobPosts()
      .subscribe(jobposts => {
        jobposts.forEach(jobpost => {
          this.utilService.getJobProcess(jobpost.id).subscribe(jobprocess => {
            jobpost.jobprocesses = jobprocess

            if ( jobpost.job_type == 1 || jobpost.job_type == 2) {
              if (jobpost.is_active == 1) {
                this.companyService.getCompany(jobpost.company_id).subscribe(company => {
                  jobpost.company = company
                })
                this.jobtypeService.getJobType(jobpost.job_type).subscribe(jobtype => {
                  jobpost.jobtype = jobtype
                  this.data.push(jobpost)
                })
              }
              else {
                this.companyService.getCompany(jobpost.company_id).subscribe(company => {
                  jobpost.company = company
                })
                this.jobtypeService.getJobType(jobpost.job_type).subscribe(jobtype => {
                  jobpost.jobtype = jobtype
                  this.closeddata.push(jobpost);
                })
              }
            }
          })
        })
        console.log("Job Posts : " , this.data) 
        console.log("Closed Job Posts :" , this.closeddata);
      }
      );
  } 


  jobtype: JobType[];
  getJobType() {
    return this.jobtypeService.getJobTypes()
      .subscribe(
        jobtype => {
          console.log("Job Type info", jobtype)
          this.jobtype = jobtype;
        }
      );
  }


  private saveCompany(): void {
    console.info("company info", this.job);
    this.companyService.addCompany(this.job)
      .subscribe(company =>
        this.uploadService.pushFileToStorage('C'+company.id, this.company.company_image).subscribe()
      );
  }


  private saveJob(): void {
    console.info("job info", this.job);
    console.info("job id", this.job.id);
    this.addjobService.addJob(this.job)
      .subscribe();
    this.jobprocess.job_post_id = this.job.id;
    this.utilService.addJobProcess(this.jobprocess).subscribe();

    this.userService.getUsersData(this.job.overall_aggregate).subscribe(eligibleuserdata => {
      eligibleuserdata.forEach(data => {
        console.log("Roll Number : ", data.roll_no)
      })
      console.log("Eligible student data : ", eligibleuserdata);
    })
    this.router.navigateByUrl('/placements');
    window.location.reload();

  }

  private saveJobProcess() {
    this.jobprocess.job_post_id = this.job.id;
    this.utilService.addJobProcess(this.jobprocess).subscribe();
  }
}