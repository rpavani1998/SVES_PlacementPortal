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
    private location: Location
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

  getJobDetails() {
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
        this.jobtypeService.getJobType(jobdata.job_type).subscribe(jobtype => {
          this.jobdata.jobtype = jobtype
          this.data.push(this.jobdata)
          console.log("Job Data : " , this.data )
        })
 
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
