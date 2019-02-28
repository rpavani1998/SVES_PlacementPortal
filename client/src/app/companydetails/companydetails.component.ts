import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobpostsService } from '../jobposts.service';
import { JobPosts } from '../jobposts';



@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  jobdata = new JobPosts();
  submitted = false;
  message : string;

  constructor(
    private route: ActivatedRoute,
    private jobpostsService : JobpostsService,
  ) { }

  ngOnInit() : void {
    const companyid = this.route.snapshot.params.companyid;
    this.jobpostsService.getJobDetails(companyid)
      .subscribe(jobdata =>  {
        console.info( "Particular Job Details Data : " ,  jobdata);
        this.jobdata = jobdata
      });
  }

  
}