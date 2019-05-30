import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { Branch } from '../models/branch';
import { StudentService } from '../services/student/student.service';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { UtilsService } from '../services/utils/utils.service';
import { UploadFileService } from '../services/file/file.service';
import { MailFormat } from '../models/mail-format';
import { Router } from '@angular/router';
// import { FILE } from 'dns';

@Component({
  selector: 'app-student-registartion',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})

export class RegisterStudentComponent{
  student = new Student(); 
  submitted = false;
  myForm: FormGroup;
  branches: Branch[] 
 
  backlogs = ["Never had any backlog", "Cleared All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"];
  data = {
    education_details : [
      {
      roll_no: localStorage.getItem('currentUser'),
      certificate_degree_name: ['', Validators.required],
      major: ['', Validators.required],
      board: ['', Validators.required],
      institute_university_name : ['', Validators.required],
      passing_year: [2019, Validators.required],
      percentage: [100, Validators.required],
      // cgpa: 10,
      proof_document: null    
      }
    ],
    experience_details : [ 
      {
      roll_no: localStorage.getItem('currentUser'),
      is_current_job: false,
      start_date: ['', Validators.required],
      end_date: null,
      job_title: ['', Validators.required],
      company_name: ['', Validators.required],
      job_location_city: ['', Validators.required],
      description: ['', Validators.required],
      proof_document: null
      }
    ],
    achievements : [
      {
      roll_no : localStorage.getItem('currentUser'),
      title : '',
      description : '',
      proof_document: null
      }
    ],
    projects : [
      {
      roll_no : localStorage.getItem('currentUser'),
      title : '',
      description : '',
      url : '',
      start_date: ['', Validators.required],
      end_date: null,
      }
    ]
  } 
  constructor(
    private studentService: StudentService,
    private utilService: UtilsService,
    private uploadService: UploadFileService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {

    this.utilService.getBranches().subscribe(branches => {
      this.branches = branches
    })
    this.myForm = this.fb.group({
      education_details: this.fb.array([]),
      experience_details: this.fb.array([]),
      achievements: this.fb.array([]),
      projects: this.fb.array([])
    })
    
    this.setEducationDetails();
    this.setExperienceDetails();
    this.setAchievements();
    this.setProjects();
  }

  deleteEducationDetails(index) {
    let control = <FormArray>this.myForm.controls.education_details;
    control.removeAt(index)
  }

  deleteAchievements(index) {
    let control = <FormArray>this.myForm.controls.achievements;
    control.removeAt(index)
  }

  deleteProjects(index) {
    let control = <FormArray>this.myForm.controls.projects;
    control.removeAt(index)
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }


 addStudent() {
   this.submitted = true;
   this.save();
   this.router.navigate(['/message'])
 }

setAchievements(){
  let control = <FormArray>this.myForm.controls.achievements;
  this.data.achievements.forEach(x => {
    control.push(this.fb.group({ 
      roll_no: x.roll_no,
      description: x.description,
      title: x.title,
      proof_document: x.proof_document
     }))
  })
}

setProjects(){
  let control = <FormArray>this.myForm.controls.projects;
  this.data.projects.forEach(x => {
    control.push(this.fb.group({ 
      roll_no: x.roll_no,
      description: x.description,
      title: x.title,
      url: x.url,
      start_date: x.start_date,
      end_date: x.end_date,
     }))
  })
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

addNewExperienceForm() {
  let control = <FormArray>this.myForm.controls.experience_details;
  control.push(
    this.fb.group( {
      roll_no: localStorage.getItem('currentUser'),
      is_current_job: false,
      start_date: ['', Validators.required],
      end_date: null,
      job_title: ['', Validators.required],
      company_name: ['', Validators.required],
      job_location_city: ['', Validators.required],
      description: ['', Validators.required],
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
      roll_no: x.roll_no,
      certificate_degree_name: x.certificate_degree_name,
      major: x.major,
      board: x.board,
      institute_university_name : x.institute_university_name,
      passing_year : x.passing_year,
      percentage: x.percentage,
      // cgpa: x.cgpa,
      proof_document: x.proof_document
     }))
  })
}

selectAchievementProofs(event, i){
  this.myForm.value.achievements[i].proof_document =  event.target.files[0];
}

selectAadharProof(event) {
  this.student.id_proof = event.target.files[0];
  // this.uploadService.pushFileToStorage('C6', this.student.id_proof).subscribe();
}

selectEduProofs(event,i){
  this.myForm.value.education_details[i].proof_document =  event.target.files[0];
  console.log('EduProofs',i, event.target.files)
}

selectExpProofs(event, i){
  this.myForm.value.experience_details[i].proof_document =  event.target.files[0];
  console.log('ExpProofs',i, event.target.files)
}

addNewEducationForm() {
  let control = <FormArray>this.myForm.controls.education_details;
  control.push(
    this.fb.group({
      roll_no: localStorage.getItem('currentUser'),
      certificate_degree_name: ['', Validators.required],
      major: ['', Validators.required],
      board: ['', Validators.required],
      institute_university_name : ['', Validators.required],
      passing_year: [2019, Validators.required],
      percentage: [100, Validators.required],
      // cgpa: 10,
      proof_document: null     
      })
  )
}

addNewAchievementForm() {
  let control = <FormArray>this.myForm.controls.achievements;
  control.push(
    this.fb.group({
      roll_no: localStorage.getItem('currentUser'),
      description:'',
      title:'',
      proof_document: null     
      })
  )
}

addNewProjectForm() {
  let control = <FormArray>this.myForm.controls.projects;
  control.push(
    this.fb.group({
      roll_no : localStorage.getItem('currentUser'),
      title : '',
      description : '',
      url : '',
      start_date: ['', Validators.required],
      end_date: null,
      })
  )
}


  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.info("student info", this.student);
    console.log(localStorage.getItem('currentUser'))
    this.student.roll_no = localStorage.getItem('currentUser');
    this.student.education_details = this.myForm.value.education_details;
    this.student.experience_details = this.myForm.value.experience_details;
    this.student.achievements = this.myForm.value.achievements;
    this.student.projects = this.myForm.value.projects;
    this.studentService.addStudentProfile(this.student).subscribe();
    this.uploadService.pushFileToStorage('A'+this.student.roll_no, this.student.id_proof).subscribe();
    for(let i in this.student.education_details){
       this.studentService.addStudentEducationDetails(this.student.education_details[i]).subscribe(result => {
         console.log("E", result)
        this.uploadService.pushFileToStorage(result.toString(), this.student.education_details[i].proof_document).subscribe();
    
    })
  }
    for(let i in this.student.experience_details){
      this.studentService.addStudentExperienceDetails(this.student.experience_details[i]).subscribe(result => {
        console.log("E", result)
       this.uploadService.pushFileToStorage(result.toString(), this.student.experience_details[i].proof_document).subscribe();
      });
    }
    for(let i in this.student.achievements){
      this.studentService.addAchievement(this.student.achievements[i]).subscribe(result => {
       this.uploadService.pushFileToStorage(result.toString(), this.student.achievements[i].proof_document).subscribe();
   
   })
 }
 
  }
}
