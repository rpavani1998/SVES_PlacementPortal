import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { JobpostsService } from '../jobposts.service';
import { JobPosts } from '../jobposts';
import { JobType } from '../jobtype';
import {JobTypeService} from '../jobtype.service';



@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  jobdata = new JobPosts();
  submitted = false;
  message : string;
  jt = new JobType();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobpostsService : JobpostsService,
    private jobtypeService : JobTypeService,
    private location: Location
  ) { }


  ngOnInit() : void {
    this.getJobDetails();
    this.getJobType();
  }

  jobtype : JobType[];
  getJobType() {
    return this.jobtypeService.getJobType()
               .subscribe(
                 jobtype => {
                   console.log("Job Type info" , jobtype)
                   this.jobtype = jobtype;
                 }
                );
 }


  getJobDetails() {
    const jobid = this.route.snapshot.params.companyid;
    this.jobpostsService.getJobDetails(jobid)
      .subscribe(jobdata =>  {
        console.info( "Particular Job Details Data : " , jobdata );
        this.jobdata = jobdata;
      });
  }

  delete(): void {
    this.submitted = true;
    this.jobpostsService.deleteJobPost(this.jobdata[0].id)
        .subscribe(result => this.message = "Student Deleted Successfully!");
    this.router.navigateByUrl('/jobposts');
    window.location.reload();
  }

  back(): void {
    this.location.back();
  }
}