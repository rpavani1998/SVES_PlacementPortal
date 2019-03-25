import { Component, OnInit } from '@angular/core';
import { JobPostsService } from '../services/job-posts/job-posts.service';
import { JobPost } from '../models/job-post';
// import { EditjobpostService } from '../ed';
import {Router} from '@angular/router';


import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/services/company/company.service';
import { StudentService } from '../services/student/student.service';
import { Student } from '../models/student';


@Component({
  selector: 'app-view-job-post',
  templateUrl: './view-job-post.component.html',
  styleUrls: ['./view-job-post.component.css']
})
export class ViewJobPostComponent implements OnInit {

  data = []
  student_data = []
  jobdata = new JobPost();
  submitted = false;
  message: string;
  roll_no = localStorage.getItem('currentUser');
  student: Student;
  
  constructor(
    private jobPostsService : JobPostsService,
    private companyService : CompanyService,
    private studentService: StudentService,
    // private editjobpostService : EditjobpostService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // checkEligibility(job_data, )
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
      this.student_data.push(student);
    }))
  
    return this.student;
 }

  ngOnInit() {
    this.getStudentDetails();
    const jobid = this.route.snapshot.params.id;
    console.log('id', jobid)
    this.jobPostsService.getJobData(jobid)
      .subscribe(jobdata =>  {
        this.jobdata = jobdata;
        this.companyService.getCompany(jobdata.company_id).subscribe(company => {
          this.jobdata.company = company;
          this.data.push(this.jobdata)
          // this.checkEligibility(this.jobdata, this.student)
        })
        console.info( "Job Details : " , jobdata );
      });
  }


  // updateJobPost(): void {
  //   this.submitted = true;
  //   console.log( " Job Data :  " , this.jobdata );
  //   // this.editjobpostService.updateJobPost(this.jobdata)
  //   //     .subscribe(result => this.message = "Job Post Updated Successfully!");
  //   this.router.navigateByUrl('/jobposts');
  //   window.location.reload()
  // }
}