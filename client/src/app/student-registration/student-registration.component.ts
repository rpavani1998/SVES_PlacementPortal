import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { Branch } from '../models/branch';
import { StudentService } from '../services/student/student.service';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { UtilsService } from '../services/utils/utils.service';
import { UploadFileService } from '../services/file/file.service';
import { MailFormat } from '../models/mail-format';
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
  selectedFiles: FileList;
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
    ]
  }
  constructor(
    private studentService: StudentService,
    private utilService: UtilsService,
    private uploadService: UploadFileService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // const branch = new Branch()
    // branch.id = ''
    // branch.branch_name 
    this.utilService.getBranches().subscribe(branches => {
      // console.log("br", branches)
      // branches.forEach(branch =>
      //   this.branches.push(branch))
      // // this.branches = branch;
      // console.log("branches", this.branches)
      this.branches = branches
    })
    this.myForm = this.fb.group({
      // first_name: [null, Validators.required],
      // last_name: [null, Validators.required],
      // branch: [null, Validators.required],
      // dob: [null, Validators.required],
      // backlogs: [null, Validators.required],
      // aadhar_no: [null, Validators.required],
      education_details: this.fb.array([]),
      experience_details: this.fb.array([])
    })
    // console.log(this.data)
    // const id = localStorage.getItem('currentUser');
    
    this.setEducationDetails();
    this.setExperienceDetails();
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

selectFile(event) {
  this.selectedFiles = event.target.files;
}

loadfiles() {
  var index = 0
  this.student.id_proof = this.selectedFiles.item(index++);
  for(var i = 0; i < this.myForm.value.education_details.length; i++){
    this.myForm.value.education_details[i].proof_document = this.selectedFiles.item(index++);
  }
  for(i= 0; i < this.myForm.value.experience_details.length; i++){
    this.myForm.value.experience_details[i].proof_document = this.selectedFiles.item(index++);
  }
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

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.info("student info", this.student);
    console.log(localStorage.getItem('currentUser'))
    this.student.roll_no = localStorage.getItem('currentUser');
    this.loadfiles()
    this.student.education_details = this.myForm.value.education_details;
    this.student.experience_details = this.myForm.value.experience_details;
    this.studentService.addStudentProfile(this.student).subscribe();
    // this.uploadService.pushFileToStorage("Img"+this.student.roll_no, ).subscribe();

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
  }
}
