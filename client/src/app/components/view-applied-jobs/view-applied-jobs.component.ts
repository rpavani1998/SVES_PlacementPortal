import { Component, OnInit } from '@angular/core';
import { JobPostActivity } from 'src/app/models/job-post-activity';
import { JobPostsService } from 'src/app/services/job-posts/job-posts.service';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-view-applied-jobs',
  templateUrl: './view-applied-jobs.component.html',
  styleUrls: ['./view-applied-jobs.component.css']
})
export class ViewAppliedJobsComponent implements OnInit {

  constructor( private jobPostsService : JobPostsService,
    private  companyService: CompanyService) { 
  }

  data = []
  job_post_activity = new JobPostActivity()

  ngOnInit() {
    const id = localStorage.getItem('currentUser');
    this.jobPostsService.getAppliedJobDetails(id).subscribe(job_posts =>
      {
        job_posts.forEach(job_post => {
          this.job_post_activity = job_post 
          this.jobPostsService.getJobDetails(job_post.job_post_id.toString()).subscribe(job_post_details =>{
              this.job_post_activity.job_details = job_post_details
              this.companyService.getCompany(job_post_details.company_id).subscribe(company => {
                this.job_post_activity.job_details.company = company;
                console.log(this.job_post_activity)
                this.data.push(this.job_post_activity)
              })
            }
          )
        });
      })
  }

}
