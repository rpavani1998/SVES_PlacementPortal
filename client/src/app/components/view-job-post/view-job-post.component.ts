import { Component, OnInit } from '@angular/core';
import { JobPostsService } from '../../services/job-posts/job-posts.service';
import { JobPost } from '../../models/job-post';
// import { EditjobpostService } from '../ed';
import {Router} from '@angular/router';


import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/services/company/company.service';


@Component({
  selector: 'app-view-job-post',
  templateUrl: './view-job-post.component.html',
  styleUrls: ['./view-job-post.component.css']
})
export class ViewJobPostComponent implements OnInit {

  data = []
  jobdata = new JobPost();
  submitted = false;
  message: string;
  roll_no = localStorage.getItem('currentUser');

  constructor(
    private jobPostsService : JobPostsService,
    private companyService : CompanyService,
    // private editjobpostService : EditjobpostService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const jobid = this.route.snapshot.params.id;
    console.log('id', jobid)
    this.jobPostsService.getJobData(jobid)
      .subscribe(jobdata =>  {
        this.jobdata = jobdata;
        this.companyService.getCompany(jobdata.company_id).subscribe(company => {
          this.jobdata.company = company;
          this.data.push(this.jobdata)
        })
        console.info( "Job Details : " , jobdata );
      });
  }

  // updateJobPost(): void {
  //   this.submitted = true;
  //   console.log( " Job Data :  " , this.jobdata );
  //   // this.editjobpostService.updateJobPost(this.jobdata)
  //   //     .subscribe(result => this.message = "Job Post Updated Successfully!");
  //   this.router.navigateByUrl('/jobposts');
  //   window.location.reload()
  // }
}