import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { CompRegistration } from '../models/comp-registartion';
import { Competition } from '../models/competition';

@Component({
  selector: 'app-view-registered-competitions',
  templateUrl: './view-registered-competitions.component.html',
  styleUrls: ['./view-registered-competitions.component.scss']
})
export class ViewRegisteredCompetitionsComponent implements OnInit {

 compRegistration=  new CompRegistration()
  constructor(
    private competitionService : CompetitionService
  ) { }
   
  data = []

  ngOnInit() {
    const id = localStorage.getItem('currentUser');
    this.competitionService.getAppliedCompetitionDetails(id).subscribe(competitions =>
      {
        competitions.forEach(competition => {
          this.compRegistration = competition
          this.competitionService.getCompetitionDetails(competition.comp_id.toString()).subscribe(comp_details =>{
          this.compRegistration.competition_details = comp_details
          this.data.push(this.compRegistration)
              })
            })
          })

        }
  }
