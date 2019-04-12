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
  is_eligible = false
  is_applied = false
  student_data = []
  jobdata = new JobPost();
  submitted = false;
  message: string;
  roll_no = localStorage.getItem('currentUser');
  student= new Student();
  
  constructor(
    private jobPostsService : JobPostsService,
    private companyService : CompanyService,
    private studentService: StudentService,
    // private editjobpostService : EditjobpostService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  checkEligibility(job_data, student){
    console.log('1111111',student , student.education_details[0].certificate_degree_name =="B.Tech", parseInt(student.education_details[0].percentage) >= parseInt(job_data.overall_aggregate))
    for(let i in student.education_details){
      console.log('12345678', student.education_details[i], job_data)
      if (student.education_details[i].certificate_degree_name =="B.Tech" &&  parseInt(student.education_details[i].percentage) >= parseInt(job_data.overall_aggregate)){
          this.is_eligible = true
          console.log('Eligible!!!')
          break;
      }
    }
    student.educationDetails
  }


  getStudentDetails() {
    const id = localStorage.getItem('currentUser');
    console.log(this.studentService.getStudent(id)
    .subscribe(student => {
      this.student = student
      this.studentService.getVerifiedStudentEducationalDetails(id)
      .subscribe(educationDetails => 
        this.student.education_details = educationDetails)
      this.studentService.getVerifiedStudentExperienceDetails(id)
        .subscribe(experienceDetails => 
          this.student.experience_details = experienceDetails)
      this.student_data.push(student);
    }))
  
    return this.student;
 }

  id = localStorage.getItem('currentUser');
  ngOnInit() {
    this.studentService.getVerifiedStudent(this.id)
    .subscribe(student => {
      this.student = student
      this.studentService.getVerifiedStudentEducationalDetails(this.id)
      .subscribe(educationDetails => 
        this.student.education_details = educationDetails)
      this.studentService.getVerifiedStudentExperienceDetails(this.id)
        .subscribe(experienceDetails => {
          this.student.experience_details = experienceDetails
          console.log(experienceDetails)
        })
      // this.data.push(student);
    })
    const jobid = this.route.snapshot.params.id;
    console.log('id', jobid)
    this.jobPostsService.getJobData(jobid)
      .subscribe(jobdata =>  {
        this.jobdata = jobdata;
        this.jobPostsService.getAppliedJobDetails(this.id).subscribe(job_posts =>
          {
            job_posts.forEach(job_post => {
              if(job_post.job_post_id== jobdata.id)
                  this.is_applied = true
                }
              )
            });
        this.companyService.getCompany(jobdata.company_id).subscribe(company => {
          this.jobdata.company = company;
          this.data.push(this.jobdata)
          this.checkEligibility(this.jobdata, this.student)
        })
        console.info( "Job Details : " , jobdata );
      });
  }

  applyJobPost(){
    this.jobPostsService.registerJobPost(this.id,this.route.snapshot.params.id).subscribe();
    this.router.navigate(['/placements'])
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