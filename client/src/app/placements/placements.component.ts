// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-placements',
//   templateUrl: './placements.component.html',
//   styleUrls: ['./placements.component.css']
// })
// export class PlacementsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { JobPostsService } from '../services/job-posts/job-posts.service';
import { JobPost } from '../models/job-post';
import { CompanyService } from 'src/app/services/company/company.service';
import { ViewAppliedJobsComponent } from '../view-applied-jobs/view-applied-jobs.component';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  jobposts = new JobPost();

  constructor(
    private jobPostsService : JobPostsService,
    private companyService : CompanyService
  ) { }

  ngOnInit() {
    this.getJobPosts()
  }

  jobpost : JobPost;
  data = [];
  getJobPosts() {
    return this.jobPostsService.getJobPosts()
    .subscribe(
      jobposts => {
        jobposts.forEach(jobpost =>{
          console.log(';',this.jobpost)
          this.companyService.getCompany(jobpost.company_id).subscribe(
            company => {
            jobpost.company = company
            if(jobpost.job_type == 3 || jobpost.job_type == 4){
              this.data.push(jobpost)
            }

          })
        })
        console.log('data', this.data)
      }
     );
    }
    
}
