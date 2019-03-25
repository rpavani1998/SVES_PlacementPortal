import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../services/competition/competition.service';
import { Competition } from '../models/competition';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student/student.service';
import { UtilsService } from '../services/utils/utils.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-view-competition',
  templateUrl: './view-competition.component.html',
  styleUrls: ['./view-competition.component.scss']
})
export class ViewCompetitionComponent implements OnInit {

  data = []
  student_data = []
  competition = new Competition() 
  submitted = false;
  message: string;
  roll_no = localStorage.getItem('currentUser');
  student: Student;
  
  constructor(
    private competitionService : CompetitionService,
    // private editjobpostService : EditjobpostService,
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private utilService: UtilsService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id)
    const compid = this.route.snapshot.params.id;
    console.log('id', compid)
    this.competitionService.getCompetitionDetails(compid)
      .subscribe(compdata =>  {
          this.data.push(compdata)
      });
  }

  

}
