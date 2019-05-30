import { Component, OnInit } from '@angular/core';
import { JobpostsService } from '../../services/jobposts/jobposts.service';
import { JobPosts } from '../../models/jobposts';
import { EditjobpostService } from '../../services/editjobpost/editjobpost.service';
import {Router} from '@angular/router';
import { UtilsService } from '../../services/utils/utils.service';
import { CompanyService } from '../../services/company_/company.service';
import { JobType } from '../../models/jobtype';
// import { NgxEditorModule } from 'ngx-editor';


import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { JobTypeService } from '../../services/jobtype/jobtype.service';

@Component({
  selector: 'app-editjobpostdetails',
  templateUrl: './editjobpostdetails.component.html',
  styleUrls: ['./editjobpostdetails.component.scss']
})
export class EditjobpostdetailsComponent implements OnInit {
  jobdata = new JobPosts();
  submitted = false;
  message: string;

  constructor(
    private jobpostsService : JobpostsService,
    private editjobpostService : EditjobpostService,
    private router: Router,
    private utilService : UtilsService,
    private companyService : CompanyService,
    private jobtypeService : JobTypeService,
    private route: ActivatedRoute,
    private location: Location) { }

    data = [];
    jobpost: JobPosts[];


  ngOnInit() {
    const jobid = this.route.snapshot.params.id;
    this.jobpostsService.getJobData(jobid)
      .subscribe(jobposts => {
          this.utilService.getJobProcess(jobid).subscribe(jobprocess => {
            jobposts.jobprocesses = jobprocess
                this.data.push(jobposts)
                this.companyService.getCompany(jobposts.company_id).subscribe(company => {
                  jobposts.company = company
                })
                this.jobtypeService.getJobType(jobposts.job_type).subscribe(jobtype => {
                  jobposts.jobtype = jobtype
                })
          })

        console.log("Job Posts : " , this.data) 
      }
      );
  } 

  updateJobPost(): void { 
    this.submitted = true;
    console.log( " Job Data :  " , this.jobdata );
    this.editjobpostService.updateJobPost(this.data)
        .subscribe(result => this.message = "Job Post Updated Successfully!");
    this.router.navigateByUrl('/placements');
    window.location.reload()
  }

  goBack(): void {
    this.location.back();
  }
}
