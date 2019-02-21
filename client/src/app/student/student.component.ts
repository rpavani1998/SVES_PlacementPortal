import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent  implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
     this.getStudents();
  }

  getStudents() {
    return this.studentService.getStudents()
               .subscribe(
                 students => {
                   console.log(students)
                   this.students = students;
                 }
                );
 }
}
