import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job-post';
import { JobPostsService } from '../services/job-posts/job-posts.service';
import { CompanyService } from '../services/company/company.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {

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
            if(jobpost.job_type == 1 || jobpost.job_type == 2){
              this.data.push(jobpost)
            }
          })
        })
        console.log('data', this.data)
      }
     );
    }
    

}
