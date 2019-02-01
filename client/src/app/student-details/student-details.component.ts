import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student = new Student() ;
  submitted = false;
  message: string;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = '15WH1A1234';
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  update(): void {
    this.submitted = true;
    this.studentService.updateStudent(this.student)
        .subscribe(result => this.message = "Student Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.studentService.deleteStudent(this.student.id)
        .subscribe(result => this.message = "Student Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}