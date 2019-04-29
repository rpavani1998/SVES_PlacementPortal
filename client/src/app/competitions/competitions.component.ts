import { Component, OnInit } from '@angular/core';
import { Competition } from '../models/competition';
import { CompetitionService } from '../services/competition/competition.service';


@Component({
  selector: 'app-icons',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competition = new Competition();

  constructor(
    private competitionService : CompetitionService
  ) { }

  ngOnInit() {
    this.getCompetitions()
  }

  // competition : Competition

  data = [];
  getCompetitions() {
    return this.competitionService.getCompetitions()
    .subscribe(
      competitions => {
        competitions.forEach(comp =>{
          console.log(comp)
              this.data.push(comp)
            })
          }
    );
        }
      }