import { Component, OnInit } from '@angular/core';
import { AddjobService } from '../addjob.service';
import { CompanyService } from '../company.service';
import { Company } from  '../company';
import { AddJob } from '../addjob';
 
@Component({
  selector: 'app-adminplacement',
  templateUrl: './adminplacement.component.html',
  styleUrls: ['./adminplacement.component.css']
})
export class AdminplacementComponent implements OnInit {

  company = new Company();
  job = new AddJob();
  submitted = false;


  constructor(
    private addjobService : AddjobService,
    private companyService : CompanyService,
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

  ngOnInit() {
  }

  private saveCompany(): void {
    console.info("company info", this.company);
    this.companyService.addCompany(this.company)
        .subscribe();
  }

  private saveJob(): void {
    console.info("job info", this.job);
    this.addjobService.addJob(this.job)
        .subscribe();
  }

}