import { Component, OnInit } from '@angular/core';
import { JobpostsService } from '../jobposts.service';
import { JobPosts } from '../jobposts';

@Component({
  selector: 'app-jobposts',
  templateUrl: './jobposts.component.html',
  styleUrls: ['./jobposts.component.css']
})
export class JobpostsComponent implements OnInit {

  jobposts = new JobPosts();

  constructor(
    private jobpostsService : JobpostsService,
  ) { }

  ngOnInit() {
    this.getJobPosts()
  }

  jobpost : JobPosts[];
   getJobPosts() {
    return this.jobpostsService.getJobPosts()
    .subscribe(
      jobpost => {
        console.log("Job Posts Details" , jobpost)
        this.jobpost = jobpost;
      }
     );
    }
}
