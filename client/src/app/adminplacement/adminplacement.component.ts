import { Component, OnInit , Input } from '@angular/core';
import { AddjobService } from '../addjob.service';
import { CompanyService } from '../company.service';
import {JobTypeService} from '../jobtype.service';
import { Company } from  '../company';
import { AddJob } from '../addjob';
import { JobType } from '../jobtype';
import { Router } from "@angular/router";


@Component({
  selector: 'app-adminplacement',
  templateUrl: './adminplacement.component.html',
  styleUrls: ['./adminplacement.component.css']
})
export class AdminplacementComponent implements OnInit {

  
  company = new Company();
  job = new AddJob();
  jt = new JobType();
  submitted = false;

  
  constructor(
    private addjobService : AddjobService,
    private router: Router,
    private companyService : CompanyService,
    private jobtypeService : JobTypeService
  ) { }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  addCompany() {  
    this.submitted = true;
    this.saveCompany();
  }

  newJob(): void {
    this.submitted = false;
    this.job = new AddJob();
  }


 addJob() {
   this.submitted = true;
   this.saveJob();
 }


  ngOnInit(): void {
    this.getJobType();
    this.getCompany();
   } 

   companydata : Company[];
   getCompany() {
    return this.companyService.getCompany()
    .subscribe(
      companydata => {
        console.log("Company Data" , companydata)
        this.companydata = companydata;
      }
     );
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

  private saveCompany(): void {
    console.info("company info", this.job);
    this.companyService.addCompany(this.job)
        .subscribe();
  }
  

  private saveJob(): void {
    console.info("job info", this.job);
    this.addjobService.addJob(this.job)
        .subscribe();
        this.router.navigateByUrl('/jobposts');
        window.location.reload();
  }
}