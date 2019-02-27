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

  student: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    const id = localStorage.getItem('currentUser');
    console.log(this.studentService.getStudent(id)
    .subscribe(student => {
      this.student = student
      this.studentService.getStudentEducationalDetails(id)
      .subscribe(educationDetails => 
        this.student.education_details = educationDetails)
      this.studentService.getStudentExperienceDetails(id)
        .subscribe(experienceDetails => 
          this.student.experience_details = experienceDetails)
      console.log(this.student)
    }))
  
    return this.student;
 }
}
