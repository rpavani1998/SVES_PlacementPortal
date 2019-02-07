import { Component, OnInit } from '@angular/core';
import {AddJobPost} from '../addjobpost';
import { AddjobpostService } from '../addjobpost.service';


@Component({
  selector: 'app-addjobpost',
  templateUrl: './addjobpost.component.html',
  styleUrls: ['./addjobpost.component.css']
})
export class AddjobpostComponent implements OnInit {

  company = new AddJobPost();
  submitted = false;

  constructor(
    private addjobpostService: AddjobpostService,
  ) { }

  newJob(): void {
    this.submitted = false;
    this.company = new AddJobPost();
  }


 addJob() {
   this.submitted = true;
   this.save();
 }

  ngOnInit() {
  }

  private save(): void {
    console.info("company info", this.company);
    this.addjobpostService.addJob(this.company)
        .subscribe();
  }
}
