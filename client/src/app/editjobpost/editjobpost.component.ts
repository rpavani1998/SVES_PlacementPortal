import { Component, OnInit } from '@angular/core';
import { JobpostsService } from '../jobposts.service';
import { JobPosts } from '../jobposts';
import { EditjobpostService } from '../editjobpost.service';
import {Router} from '@angular/router';


import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editjobpost',
  templateUrl: './editjobpost.component.html',
  styleUrls: ['./editjobpost.component.css']
})
export class EditjobpostComponent implements OnInit {

  jobdata = new JobPosts();
  submitted = false;
  message: string;


  constructor(
    private jobpostsService : JobpostsService,
    private editjobpostService : EditjobpostService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const jobid = this.route.snapshot.params.jobid;
    this.jobpostsService.getJobData(jobid)
      .subscribe(jobdata =>  {
        console.info( "Job Details : " , jobdata );
        this.jobdata = jobdata;
      });
  }

  updateJobPost(): void {
    this.submitted = true;
    console.log( " Job Data :  " , this.jobdata );
    this.editjobpostService.updateJobPost(this.jobdata)
        .subscribe(result => this.message = "Job Post Updated Successfully!");
    this.router.navigateByUrl('/jobposts');
    window.location.reload()
  }
}