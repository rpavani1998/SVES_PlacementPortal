import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';
import { EducationDetails } from '../education-details';

@Component({
  selector: 'app-registartion',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegisterStudentComponent{
  student = new Student();
  submitted = false;
  myForm: FormGroup;
  backlogs = ["Never had any backlog", "Cleared All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"];
  data = {
    education_details : [
      {
      certificate_degree_name: '',
      major: '',
      institute_university_name : '',
      start_date: null,
      completion_date: null,
      percentage: 100,
      cgpa: 10,
      proof_document: null    
      }
    ],
    experience_details : [ 
      {
      is_current_job: false,
      start_date: null,
      end_date: null,
      job_title: '',
      company_name: '',
      job_location_city:  '',
      description: '',
      proof_document: null
      }
    ]
  }
  constructor(
    private studentService: StudentService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      education_details: this.fb.array([]),
      experience_details: this.fb.array([])
    })
    this.setEducationDetails();
  }

  deleteEducationDetails(index) {
    let control = <FormArray>this.myForm.controls.education_details;
    control.removeAt(index)
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

 addStudent() {
   this.submitted = true;
   this.save();
 }

 setExperienceDetails() {
  let control = <FormArray>this.myForm.controls.education_details;
  this.data.experience_details.forEach(x => {
    control.push(this.fb.group({ 
      is_current_job: x.is_current_job,
      start_date: x.start_date,
      end_date: x.end_date,
      job_title: x.job_title,
      company_name: x.company_name,
      job_location_city: x.job_location_city,
      description: x.description,
      proof_document: x.proof_document
     }))
  })
}

addNewExperienceForm() {
  let control = <FormArray>this.myForm.controls.experience_details;
  control.push(
    this.fb.group({
      is_current_job: false,
      start_date: null,
      end_date: null,
      job_title: '',
      company_name: '',
      job_location_city:  '',
      description: '',
      proof_document: null
    })
  )
}

deleteExperienceDetails(index) {
  let control = <FormArray>this.myForm.controls.experience_details;
  control.removeAt(index)
}

setEducationDetails() {
  let control = <FormArray>this.myForm.controls.education_details;
  this.data.education_details.forEach(x => {
    control.push(this.fb.group({ 
      certificate_degree_name: x.certificate_degree_name,
      major: x.major,
      institute_university_name : x.institute_university_name,
      start_date: x.start_date,
      completion_date: x.completion_date,
      percentage: x.percentage,
      cgpa: x.cgpa,
      proof_document: x.proof_document
     }))
  })
}

addNewEducationForm() {
  let control = <FormArray>this.myForm.controls.education_details;
  control.push(
    this.fb.group({
      certificate_degree_name: '',
      major: '',
      institute_university_name : '',
      start_date: null,
      completion_date: null,
      percentage: 100,
      cgpa: 10,
      proof_document: null
    })
  )
}

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.info("student info", this.student);
    this.student.educational_details = this.myForm.value.education_details;
    this.student.experience_details = this.myForm.value.experience_details;
    this.studentService.addStudentProfile(this.student)
    .subscribe();
    for(let i in this.student.educational_details){
       this.studentService.addStudentEducationDetails(this.student.educational_details[i]).subscribe(); 
    }
    for(let i in this.student.experience_details){
      this.studentService.addStudentExperienceDetails(this.student.experience_details[i]).subscribe();  
   }
  }

}

