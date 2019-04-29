import { Component, OnInit } from '@angular/core';
import { JobPostsService } from '../services/job-posts/job-posts.service';
import { JobPost } from '../models/job-post';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css']
})
export class JobPostsComponent implements OnInit {

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
            this.data.push(jobpost)
          })
        })
        console.log('data', this.data)
      }
     );
    }
    
}
