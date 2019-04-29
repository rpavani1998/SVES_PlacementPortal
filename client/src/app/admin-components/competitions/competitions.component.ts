import { Component, OnInit } from '@angular/core';
import { Competition } from '../../models/competition'
import { CompetitionService } from '../../services/competition/competition.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class AdminCompetitionsComponent implements OnInit {

  competition = new Competition();

  constructor(
    private router: Router,
    private competitonService : CompetitionService
  ) { }

  competitions : Competition[];
  ngOnInit() {
    this.competitonService.getCompetitions().subscribe(competitions => {
      this.competitions = competitions
      console.log("Competitions : " , competitions);
    })
  }

  addCompetition() {
    this.competitonService.addCompetition(this.competition).subscribe(Competition => {
    });
    this.router.navigateByUrl('/competitions');
    window.location.reload();

  }

}
