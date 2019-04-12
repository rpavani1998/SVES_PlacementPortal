import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { JobType } from 'src/app/models/jobtype';
import { JobpostsService } from 'src/app/services/jobposts/jobposts.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { CompanyService } from 'src/app/services/company_/company.service';
import { JobTypeService } from 'src/app/services/jobtype/jobtype.service';
import { JobPosts } from 'src/app/models/jobposts';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student/student.service';
import { EducationDetails } from 'src/app/models/education-details';


// import { JobpostsService } from '../services/jobposts/jobposts.service';
// import { JobPosts } from '../models/jobposts';
// import { JobType } from '../models/jobtype';
// import {JobTypeService} from '../services/jobtype/jobtype.service';
// import { CompanyService } from '../services/company/company.service';
// import { UtilsService } from '../services/utils/utils.service';

@Component({
  selector: 'app-jobpostdetails',
  templateUrl: './jobpostdetails.component.html',
  styleUrls: ['./jobpostdetails.component.scss']
})
export class JobpostdetailsComponent implements OnInit {
  submitted = false;
  message : string;
  jt = new JobType();
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobpostsService : JobpostsService,
    private utilService : UtilsService,    
    private companyService : CompanyService,
    private jobtypeService : JobTypeService,
    private location: Location,
    private userService: UserService,
    private studentService : StudentService
  ) { }

  ngOnInit() {
    this.getJobDetails();
    this.getJobType();
  }

  jobtype : JobType[];
  getJobType() {
    return this.jobtypeService.getJobTypes()
               .subscribe(
                 jobtype => {
                   console.log("Job Type info" , jobtype)
                   this.jobtype = jobtype;
                 }
                );
 }


  data = [];
  jobdata : JobPosts;
  jobstages = {};
  registered = [];
  notregistered = [];
  eligiblestudents = {};
  userdata: User;
  verifiedstudents : EducationDetails[];
  
  getJobDetails() {

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.branch_id);
          this.userdata = userdata;
        });


 
    const jobid = this.route.snapshot.params.jobid; 
    console.log("Job Posts Data : " , this.route.snapshot.params.jobid)
    this.jobpostsService.getJobData(jobid).subscribe(jobdata => {
        console.log("Hey",jobdata)
        this.jobdata = jobdata
        this.companyService.getCompany(jobdata.company_id).subscribe(company => {
          this.jobdata.company = company; 
        })
        this.utilService.getJobProcess(jobid).subscribe(jobprocess => {
          this.jobdata.jobprocesses = jobprocess; 
        })

        // this.studentService.getVerifiedStudentDetails(this.userdata.branch_id).subscribe(verfiedstudents => {
        //   this.verifiedstudents = verfiedstudents
        // })

        this.utilService.getEligibleStudents(jobid).subscribe(eligiblestudents => {
          eligiblestudents.forEach(student => {
            if (student.is_qualified == "Not Registered" ) {
              this.notregistered.push(eligiblestudents)
            } else {
              this.registered.push(eligiblestudents)
            }
          })
        })

        var keys = Object.keys(this.registered);
        var len = keys.length;
        this.eligiblestudents['registered'] = len;


        var keys = Object.keys(this.notregistered);
        var nrlen = keys.length;
        this.eligiblestudents['notregistered'] = nrlen;
      
        // console.log("Registered Students : " , this.registered);
        // console.log("Not Registered Students : " , this.notregistered);
        console.log("Eligible Students : " , this.eligiblestudents)

        this.jobtypeService.getJobType(jobdata.job_type).subscribe(jobtype => {
          this.jobdata.jobtype = jobtype
          this.data.push(this.jobdata)
          console.log("Job Data : " , this.data )
        })

        this.utilService.getJobStages().subscribe(jobstages => {
          jobstages.forEach(jobstage => {
            this.jobstages[jobstage.id] = jobstage.stage_name;
          })
        })

        console.log("Job Stages : " , this.jobstages);
 
    })
  }

  delete(): void { 
    this.submitted = true;
    this.jobpostsService.deleteJobPost(this.data[0].id)
        .subscribe(result => this.message = "Student Deleted Successfully!");
    this.router.navigateByUrl('/placements');
    window.location.reload();
  }
 

  closeJobPost(): void {
    this.jobpostsService.closeJobPost(this.data[0].id).subscribe(result => {
      console.log("Closed Job Post Successfully" , result);
    })
    this.router.navigateByUrl('/placements');
    window.location.reload();
  }
   
  back(): void {
    this.location.back();
  }
}


// this.utilService.getRegisteredStudents(jobid).subscribe(registeredstudents => {
        //   console.log("Registered Students : " , registeredstudents)
        //   if ( this.userdata.branch_id == "Any" ) {
        //     var len = registeredstudents.length;
        //     this.eligiblestudents['registered'] = len
        //   } else {
        //     registeredstudents.forEach(rstudents => {
        //       this.studentService.getVerifiedStudentDetails(this.userdata.branch_id).subscribe(student => {
        //         if ( rstudents.roll_no == student.roll_no ) {
        //           this.registered.push(rstudents)
        //         }
        //       })
        //     })
        //     this.eligiblestudents['registered'] = this.notregistered.length;
        //   }
        // })

        // this.utilService.getNotRegisteredStudents(jobid).subscribe(notregisteredstudents => {
        //   console.log("Not registeredstudents : " , notregisteredstudents)
        //   if ( this.userdata.branch_id == "TPO" ) {
        //     var len = notregisteredstudents.length;
        //     this.eligiblestudents['notregistered'] = len
        //   } else {
        //     notregisteredstudents.forEach(nrstudents => {
        //       this.studentService.getVerifiedStudentDetails(this.userdata.branch_id).subscribe(student => {
        //         if ( nrstudents.roll_no == student.roll_no ) {
        //           this.notregistered.push(nrstudents)
        //         }
        //       })
        //     })
        //     this.eligiblestudents['notregistered'] = this.notregistered.length;
        //   }
        // })
