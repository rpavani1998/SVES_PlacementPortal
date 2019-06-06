import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student/student.service';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Branch } from '../models/branch';
import { UtilsService } from '../services/utils/utils.service';
import { UploadFileService } from '../services/file/file.service';
import { Observable } from 'rxjs';
import { EducationDetails } from '../models/education-details';
import { ExperienceDetails } from '../models/experience-details';
import { Achievement } from '../models/achievement';

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
    experience_details : [],
    achievements : [],
    projects : []
  }
  
  myForm: FormGroup;
  edu_ids = []
  exp_ids = []
  ach_ids = []
  proj_ids = []
  prev_edu_details :EducationDetails[]
  prev_exp_details: ExperienceDetails[]

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
    this.studentService.getVerifiedStudent(id)
    .subscribe(student => {
      this.student = student
    });

  this.myForm = this.fb.group({
    education_details: this.fb.array([]),
    experience_details: this.fb.array([]),
    achievements: this.fb.array([]),
    projects: this.fb.array([])
  })



  this.studentService.getVerifiedStudentEducationalDetails(id)
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
        proof_document: x.proof_document
       }))
       this.edu_ids.push(x.id)
    })
    });



this.studentService.getVerifiedStudentExperienceDetails(id)
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
      this.exp_ids.push(x.id)
    })
  });

  this.studentService.getAchievements(id)
  .subscribe(achievement => {
    let control = <FormArray>this.myForm.controls.achievements;
    achievement.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: localStorage.getItem('currentUser'),
        title: x.title,
        description: x.description,
        proof_document: x.proof_document
       }))
      this.ach_ids.push(x.id)
    })
  });

  this.studentService.getProjects(id)
  .subscribe(achievement => {
    let control = <FormArray>this.myForm.controls.achievements;
    achievement.forEach(x => {
      control.push(this.fb.group({ 
        roll_no: localStorage.getItem('currentUser'),
        title: x.title,
        description: x.description,
        url: x.url,
        start_date: x.start_date,
        end_date: x.end_date
       }))
      this.proj_ids.push(x.id)
    })
  });
  this.prev_edu_details = this.myForm.value.education_details;
  this.prev_exp_details = this.myForm.value.experience_details;
  this.setEducationDetails();
  this.setExperienceDetails();
  this.setAchievements();
  this.setProjects();
  }

  deleteEducationDetails(index) {
    let control = <FormArray>this.myForm.controls.education_details;
    control.removeAt(index)
  }

  deleteExperienceDetails(index) {
    let control = <FormArray>this.myForm.controls.experience_details;
    control.removeAt(index)
  }

  deleteProjects(index) {
    let control = <FormArray>this.myForm.controls.projects;
    control.removeAt(index)
  }
  
  update(): void {
    this.submitted = true;
    console.info("student info", this.student);
    console.log(localStorage.getItem('currentUser'))
    this.student.roll_no = localStorage.getItem('currentUser');
    this.student.education_details = this.myForm.value.education_details;
    this.student.experience_details = this.myForm.value.experience_details;
    this.student.achievements = this.myForm.value.achievements;
    this.studentService.updateStudent(this.student).subscribe();
    // this.uploadService.pushFileToStorage('A'+this.student.roll_no, this.student.id_proof).subscribe();
    for(let i=0; i < this.student.education_details.length; i++){
      console.log('test', this.student.education_details[i], this.prev_edu_details[i])
      let check1   = this.student.education_details[i];
      check1.id = null;
      let check2   = this.prev_edu_details[i];
      check2.id = null;
      if(check1 != check2) {
        this.studentService.addStudentEducationDetails(this.student.education_details[i]).subscribe(result => {
         console.log("E", result)
         if(this.student.education_details[i].proof_document){
           this.uploadService.pushFileToStorage(result.toString(), this.student.education_details[i].proof_document).subscribe();
         }
    })
  }
  }
    for(let i=0; i < this.student.experience_details.length; i++){
      var check1   = this.student.experience_details[i];
      check1.id = null;
      var check2   = this.prev_exp_details[i];
      check2.id = null;
      if(check1 != check2) {
      // if(this.student.experience_details[i] != this.prev_exp_details[i]) {
      this.studentService.addStudentExperienceDetails(this.student.experience_details[i]).subscribe(result => {
        console.log("E", result)
        if(this.student.experience_details[i].proof_document){
            this.uploadService.pushFileToStorage(result.toString(), this.student.experience_details[i].proof_document).subscribe();
        }
      });
    }
    }
     for(var i=0; i < this.myForm.value.achievements.length; i++){
       console.log(this.myForm.value.achievements[i].id, this.ach_ids)
      if (this.myForm.value.achievements[i].id in this.ach_ids){
        this.studentService.updateAchievement(this.myForm.value.achievement[i])
        .subscribe();
      } else{
        this.studentService.addAchievement(this.student.achievements[i]).subscribe(result => {
          // console.log("E", result)
         this.uploadService.pushFileToStorage(result.toString(), this.student.experience_details[i].proof_document).subscribe();
        });
      }
     
    }

    for(var i=0; i < this.myForm.value.projects.length; i++){
      console.log(this.myForm.value.projects[i].id, this.proj_ids)
     if (this.myForm.value.projects[i].id in this.proj_ids){
       this.studentService.updateProject(this.myForm.value.experience_details[i])
       .subscribe();
     } else{
       this.studentService.addProject(this.student.projects[i]).subscribe(result => {
         // console.log("E", result)
        // this.uploadService.pushFileToStorage(result.toString(), this.student.experience_details[i].proof_document).subscribe();
       });
     }
    
   }
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


  deleteAchievements(index) {
    let control = <FormArray>this.myForm.controls.achievements;
    control.removeAt(index)
  }
  

  selectAchievementProofs(event, i){
    this.myForm.value.achievements[i].proof_document =  event.target.files[0];
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