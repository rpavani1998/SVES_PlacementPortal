import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/services/company_/company';
import { AddJob } from 'src/app/models/addjob';
import { JobType } from 'src/app/models/jobtype';
import { JobPosts } from 'src/app/models/jobposts';
import { JobStage } from 'src/app/models/jobstage';
import { AddjobService } from 'src/app/services/addjob/addjob.service';
import { Router } from '@angular/router';
import { InternshipsService } from 'src/app/services/internships/internships.service';
import { CompanyService } from 'src/app/services/company_/company.service';
import { JobpostsService } from 'src/app/services/jobposts/jobposts.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { JobTypeService } from 'src/app/services/jobtype/jobtype.service';
// import { UtilsService } from '../utils.service';
// import { AddjobService } from '../addjob.service';
// import { CompanyService } from '../company.service';
// import {JobTypeService} from '../jobtype.service';
// import { JobpostsService } from '../jobposts.service';
// import { InternshipsService } from '../internships.service';
// import { JobPosts } from '../jobposts';
// import { Company } from  '../company';
// import { AddJob } from '../addjob';
// import { JobType } from '../jobtype';
// import { Router } from "@angular/router";
// import { JobStage } from '../jobstage';



@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})


export class AdminInternshipsComponent implements OnInit {
  company = new Company();
  job = new AddJob();
  jt = new JobType();
  jobposts = new JobPosts();
  submitted = false;
  jobstage : JobStage[];

  
  constructor(
    private addjobService : AddjobService,
    private router: Router,
    private internshipService : InternshipsService,
    private companyService : CompanyService,
    private jobpostsService : JobpostsService,
    private utilService: UtilsService, 
    private jobtypeService : JobTypeService
  ) { }

//   newCompany(): void {
//     this.submitted = false;
//     this.company = new Company();
//   }

//   addCompany() {  
//     this.submitted = true;
//     this.saveCompany();
//   }

//   newJob(): void {
//     this.submitted = false;
//     this.job = new AddJob();
//   }


//  addJob() {
//    this.submitted = true;
//    this.saveJob();
//  }

  ngOnInit(): void {
//     this.getJobType();
//     this.getCompany(); 
//     this.getJobPosts();

//     this.utilService.getJobStages().subscribe(jobstage => {
//       this.jobstage = jobstage;
//       console.log("Job Stage : " , jobstage);
//     })

   } 


//    companydata : Company[];
//    getCompany() {
//     return this.companyService.getCompany()
//     .subscribe(
//       companydata => {
//         console.log("Company Data" , companydata)
//         this.companydata = companydata;
//       }
//      );
//    }


//   jobtype : JobType[];
//   getJobType() {
//     return this.jobtypeService.getJobType()
//                .subscribe(
//                  jobtype => {
//                    console.log("Job Type info" , jobtype)
//                    this.jobtype = jobtype;
//                  }
//                 );
//  }

//   internshipjobpost : JobPosts[];
//    getJobPosts() {
//     return this.internshipService.getInternshipJobPosts()
//     .subscribe(internshipjobpost => {
//       console.log("Internship Job Posts Details" , internshipjobpost)
//       this.internshipjobpost = internshipjobpost;
//       }
//      );
//     }


//   private saveCompany(): void {
//     console.info("company info", this.job);
//     this.companyService.addCompany(this.job)
//         .subscribe();
//   }
  

//   private saveJob(): void {
//     console.info("job info", this.job);
//     this.addjobService.addJob(this.job)
//         .subscribe();
//         this.router.navigateByUrl('/internships');
//         window.location.reload();
//   }   
}