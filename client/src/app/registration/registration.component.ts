import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-student',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegisterStudentComponent{

  student = new Student();
  submitted = false;
  form: FormGroup;
  backlogs = ["Never had any backlog", "Cleared All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"];
  constructor(
    private studentService: StudentService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    })
  }

  createItem() {
    return this.fb.group({
      name: ['Jon'],
      surname: ['Doe']
    })
  }

  addNext() {
    (this.form.controls['items'] as FormArray).push(this.createItem())
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

 addStudent() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.info("student info", this.student);
    this.studentService.addStudent(this.student)
        .subscribe();
  }
}

