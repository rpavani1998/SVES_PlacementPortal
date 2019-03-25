import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student/student.service';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Branch } from '../models/branch';
import { UtilsService } from '../services/utils/utils.service';
import { UploadFileService } from '../services/file/file.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student = new Student();
  submitted = false;
  message: string;
  branches: Branch[]
  backlogs = ["Never had any backlog", "Cleared All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"];

  data = {
    education_details : [],
    experience_details : []
  }
  
  myForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private uploadService: UploadFileService,
    private utilService: UtilsService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.utilService.getBranches().subscribe(branch => {
      this.branches = branch;
    })
    const id = localStorage.getItem('currentUser');
    this.studentService.getStudent(id)
    .subscribe(student => {
      this.student = student
    });

  this.myForm = this.fb.group({
    education_details: this.fb.array([]),
    experience_details: this.fb.array([])
  })

  var ids = []

  this.studentService.getStudentEducationalDetails(id)
  .subscribe(educationDetails => {
    let control = <FormArray>this.myForm.controls.education_details;
    educationDetails.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: localStorage.getItem('currentUser'),
        certificate_degree_name: x.certificate_degree_name,
        major: x.major,
        board: x.board,
        institute_university_name : x.institute_university_name,
        passing_year : x.passing_year,
        percentage: x.percentage,
        cgpa: x.cgpa,
        proof_document: x.proof_document
       }))
       ids.push(x.id)
    })
    });



this.studentService.getStudentExperienceDetails(id)
  .subscribe(experienceDetails => {
    let control = <FormArray>this.myForm.controls.experience_details;
    experienceDetails.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: localStorage.getItem('currentUser'),
        is_current_job: x.is_current_job,
        start_date: x.start_date,
        end_date: x.end_date,
        job_title: x.job_title,
        company_name: x.company_name,
        job_location_city: x.job_location_city,
        description: x.description,
        proof_document: x.proof_document
       }))
      ids.push(x.id)
    })
  });
  this.setEducationDetails();
  this.setExperienceDetails();
  }

  deleteEducationDetails(index) {
    let control = <FormArray>this.myForm.controls.education_details;
    control.removeAt(index)
  }
  
  update(): void {
    this.submitted = true;
    this.studentService.updateStudent(this.student)
        .subscribe();
    for(var i=0; i < this.myForm.value.education_details.length; i++){
      this.studentService.updateStudentEducationalDeails(this.myForm.value.education_details[i])
      .subscribe(student=>{
        console.log('id')
        if(!student){
          for(let i in this.student.education_details){
                this.studentService.addStudentEducationDetails(this.student.education_details[i]).subscribe(result => {
                  console.log("E", result)
                  this.uploadService.pushFileToStorage(result.toString(), this.student.education_details[i].proof_document).subscribe();
              
              })
            }

        }
      });
    
    }
    for(var i=0; i < this.myForm.value.experience_details.length; i++){
      this.studentService.updateStudentExperienceDetails(this.myForm.value.experience_details[i])
      .subscribe(student=> {
        if(!student){
          for(let i in this.student.experience_details){
            this.studentService.addStudentExperienceDetails(this.student.experience_details[i]).subscribe(result => {
              console.log("E", result)
             this.uploadService.pushFileToStorage(result.toString(), this.student.experience_details[i].proof_document).subscribe();
            });
          }
        }});
    }
   
  }

  addNewExperienceForm() {
    let control = <FormArray>this.myForm.controls.experience_details;
    control.push(
      this.fb.group({
        roll_no: localStorage.getItem('currentUser'),
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

  addNewEducationForm() {
    let control = <FormArray>this.myForm.controls.education_details;
    control.push(
      this.fb.group({
        roll_no: localStorage.getItem('currentUser'),
        certificate_degree_name: '',
        major: '',
        board: '',
        institute_university_name : '',
        passing_year : 2019,
        percentage: 100,
        cgpa: 10,
        proof_document: null
      })
    )
  }
  

  setExperienceDetails() {
    let control = <FormArray>this.myForm.controls.experience_details;
    this.data.experience_details.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: x.roll_no,
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

  setExperienceDetails_() {
    let control = <FormArray>this.myForm.controls.education_details;
    this.student.experience_details.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: x.roll_no,
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

  setEducationDetails() {
    let control = <FormArray>this.myForm.controls.education_details;
    this.data.education_details.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: x.roll_no,
        certificate_degree_name: x.certificate_degree_name,
        major: x.major,
        board: x.board,
        institute_university_name : x.institute_university_name,
        passing_year : x.passing_year,
        percentage: x.percentage,
        cgpa: x.cgpa,
        proof_document: x.proof_document
       }))
    })
  }

  setEducationDetails_() {
    let control = <FormArray>this.myForm.controls.education_details;
    this.data.education_details.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: x.roll_no,
        certificate_degree_name: x.certificate_degree_name,
        major: x.major,
        board: x.board,
        institute_university_name : x.institute_university_name,
        passing_year : x.passing_year,
        percentage: x.percentage,
        cgpa: x.cgpa,
        proof_document: x.proof_document
       }))
    })
  }


  delete(): void {
    this.submitted = true;
    this.studentService.deleteStudent(this.student.roll_no)
        .subscribe(result => this.message = "Student Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }

  showFile = false;
  fileUploads: Observable<string[]>;

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }

  }


}