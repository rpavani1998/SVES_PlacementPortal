import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company_';
import { AddJob } from 'src/app/models/addjob';
import { JobProcess } from 'src/app/models/jobprocess';
import { JobType } from 'src/app/models/jobtype';
import { JobPosts } from 'src/app/models/jobposts';
import { JobStage } from 'src/app/models/jobstage';
import { Branch } from 'src/app/models/branch';
import { College } from 'src/app/models/college';
import { EducationDetails } from 'src/app/models/notifications';
import { User } from 'src/app/models/user';
import { AddjobService } from '../../services/addjob/addjob.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company_/company.service';
import { JobpostsService } from 'src/app/services/jobposts/jobposts.service';
import { JobTypeService } from 'src/app/services/jobtype/jobtype.service';
import { UploadFileService } from 'src/app/services/file/file.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { UserService } from 'src/app/services/user/user.service';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student/student.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { NgxEditorModule } from 'ngx-editor';

import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

 
@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class AdminPlacementsComponent implements OnInit {
  company = new Company();
  job = new AddJob();
  jobprocess = new JobProcess();
  jt = new JobType();
  jobposts = new JobPosts();
  submitted = false;
  selectedFiles: File;

  application = new Company();

  jobstage: JobStage[];
  majors: Branch[]
  institute_university_names: College[]
  filters = new EducationDetails();
  userdata: User;
  myForm: FormGroup;
  data = [];
  closeddata = [];
  companyprofiles = {};

  eligibility = {
    eligibility_criteria : [
      {
      degree : ['' , Validators.required],
      major :  ['' , Validators.required],
      perecentage : ['' , Validators.required],
      backlogs : ['' , Validators.required]
      }
    ] 
  }



  constructor(
    private addjobService: AddjobService,
    private router: Router,
    private companyService: CompanyService,
    private jobpostsService: JobpostsService,
    private jobtypeService: JobTypeService,
    private uploadService: UploadFileService,
    private utilService: UtilsService,
    private userService: UserService,
    private fb: FormBuilder,
    private studentService : StudentService

  ) { }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  addCompany() {
    this.submitted = true;
    this.saveCompany();
  }

  newJob(): void {
    this.submitted = false;
    this.job = new AddJob();
  }


  addJob() {
    this.submitted = true;
    this.saveJob();
    this.saveJobProcess();
  }
  jobstages = {}
  ngOnInit(): void { 
    this.getJobType();
    this.getJobPosts();
    this.getCompany();

    this.myForm = this.fb.group({
      eligibility_criteria : this.fb.array([]),
    })

    this.utilService.getJobStages().subscribe(jobstages => {
      jobstages.forEach(jobstage => {
        this.jobstages[jobstage.id] = jobstage.stage_name;
      })
    })

    this.utilService.getBranches().subscribe(major => {
      this.majors = major;
      console.log("Branches : ", major); 

      this.utilService.getColleges().subscribe(institute_university_name => {
        this.institute_university_names = institute_university_name;
        console.log("Colleges : ", institute_university_name);
      })
    });

    this.utilService.getJobStages().subscribe(jobstage => {
      this.jobstage = jobstage;
      console.log("Job Stage : ", jobstage); 
    })

    var uid = localStorage.getItem('currentUser');
    this.userService.getUser(uid)
      .subscribe(
        userdata => {
          console.log("User Data : ", userdata.user_type_id);
          this.userdata = userdata;
        });
  }

  deleteEligibility(index) {
    let control = <FormArray>this.myForm.controls.eligibility_criteria;
    control.removeAt(index)
  }

     companydata : Company[];
   getCompany() {
    return this.companyService.getCompanyData()
    .subscribe(
      companydata => {
        console.log("Company Data" , companydata) 
        this.companydata = companydata;
        companydata.forEach(cd => {
          console.log(cd.company_id)
          this.companyService.getCompanyProfiles(cd.company_id).subscribe(result => {
            console.log("Company Profile : " , result)
            this.companyprofiles[cd.company_name] = [result[0].job_profile]
          }) 
        })
        console.log("Job Profiles : " , this.companyprofiles) 
      }
     );
   }



   selectCompanyImage(event){
    this.company.company_image = event.target.files[0];
   }

   refresh () {
     window.location.reload();
   }


  user: User;
  student: Student;

  jobpost: JobPosts[];
  getJobPosts() {
    return this.jobpostsService.getJobPosts()
      .subscribe(jobposts => {
        jobposts.forEach(jobpost => {
          this.utilService.getJobProcess(jobpost.id).subscribe(jobprocess => {
            jobpost.jobprocesses = jobprocess

            if ( jobpost.job_type == 3 || jobpost.job_type == 4 ) {
              if (jobpost.is_active == 1) {
                this.companyService.getCompany(jobpost.company_id).subscribe(company => {
                  jobpost.company = company
                })
                this.jobtypeService.getJobType(jobpost.job_type).subscribe(jobtype => {
                  jobpost.jobtype = jobtype
                  this.data.push(jobpost)
                })
              }  
              else {
                this.companyService.getCompany(jobpost.company_id).subscribe(company => {
                  jobpost.company = company
                })
                this.jobtypeService.getJobType(jobpost.job_type).subscribe(jobtype => {
                  jobpost.jobtype = jobtype
                  this.closeddata.push(jobpost);
                })
              }
            }
          })
        })
        console.log("Job Posts : " , this.data) 
        console.log("Closed Job Posts :" , this.closeddata);
      }
      );
  } 


  jobtype: JobType[];
  getJobType() {
    return this.jobtypeService.getJobTypes()
      .subscribe(
        jobtype => {
          console.log("Job Type info", jobtype)
          this.jobtype = jobtype;
        }
      );
  }


  private saveCompany(): void {
    console.info("company info", this.job);
    this.companyService.addCompany(this.job)
      .subscribe(company => {
        console.log("Company ID : " , company[0].company_id, this.company.company_image)
        this.uploadService.pushFileToStorage('C'+company[0].company_id, this.company.company_image).subscribe()
      })
    // this.router.navigateByUrl('/placements');
      for(let i = 0; i < 1000; i++){}
 window.location.reload(); 
    }

 
  private saveJob(): void {
    console.info("job info", this.job);
    console.info("job id", this.job.id);
    this.addjobService.addJob(this.job )
      .subscribe(job => { 
      })
    this.jobprocess.job_post_id = this.job.id;
    this.utilService.addJobProcess(this.jobprocess).subscribe(); 

    this.router.navigateByUrl('/placements');
    window.location.reload(); 

  }

  students = [];
  getfiltereddata() { 
    
    if ( this.userdata.user_type_id == 'TPO' ) {
      this.jobpostsService.getJobProfile(this.job.job_profile).subscribe(jobid => {
        console.log("Job : " , jobid)
        this.studentService.getFilteredData( this.filters.passing_year , this.filters.major).subscribe(filtereddata => {
          filtereddata.forEach(student => {
            this.studentService.getJobProcessPlacedStudents( student.roll_no , jobid[0].id).subscribe(student => {
              student.forEach(s => {
                // console.log(s)
                if (s.roll_no) {
                  this.students.push(s)
                }
              })
            })
          })
        })      
    })
    console.log("Students : " , this.students) 
   } else {
    this.jobpostsService.getJobProfile(this.job.job_profile).subscribe(jobid => {
      console.log("Job : " , jobid)
      this.studentService.getFilteredData( this.filters.passing_year , this.userdata.branch_id).subscribe(filtereddata => {
        filtereddata.forEach(student => {
          this.studentService.getJobProcessPlacedStudents( student.roll_no , jobid[0].id).subscribe(student => {
            student.forEach(s => {
              if (s.roll_no) {
                this.students.push(s)
              }
            })
          }) 
        })
      })
      console.log("Students Data : " , this.students);      
  })
  }
  window.alert("Data has been retrieved please download the excel to view data!!")
  }

exceldata = {};
formatedData = []
changeDataFormat(){
  this.exceldata[this.students[0].roll_no] = []
  for(let i = 0; i < this.students.length - 1 ; i++){
    if(this.students[i].roll_no == this.students[i+1].roll_no ){
      this.exceldata[this.students[i].roll_no].push(this.students[i].is_qualified)
    }else if( this.students[i].roll_no == this.students[i+1].roll_no && i+1 > this.students.length - 1){
      this.exceldata[this.students[i+1].roll_no].push(this.students[i+1].is_qualified)
    }
    else{
      this.exceldata[this.students[i].roll_no].push(this.students[i].is_qualified)
      this.exceldata[this.students[i+1].roll_no] = []
    }
  }
  for (var key in this.exceldata) {
    if (this.exceldata.hasOwnProperty(key)) {
        this.formatedData.push( [ key.replace(/"/g,""), this.exceldata[key] ] );
    }
}
  console.log(this.exceldata)
}

getHeaders(){
  this.changeDataFormat()
  let headers = ['Roll Number']
  // this.exceldata[this.students[0].roll_no] = []
  for(let i = 0; i < this.students.length; i++){
    if(this.students[i].roll_no == this.students[i+1].roll_no){
      // this.exceldata[this.students[i].roll_no].push(this.students[i].status)
      console.log(this.students[i].job_process_id.toString().slice(-1))
      headers.push(this.jobstages[this.students[i].job_process_id.toString().slice(-1)])
    }else{
      // this.exceldata[this.students[i].roll_no].push(this.students[i].status)
      headers.push(this.jobstages[this.students[i].job_process_id.toString().slice(-1)])
      // this.exceldata[this.students[i+1].roll_no] = []
      console.log(headers)
      return headers
    }
  }

}
  downloadExcel() {
    var options = {
      fieldSeparator: ',',
      // quoteStrings: '"',
      // decimalseparator: '.',
      // showLabels: true,
      // showTitle: true,
      title: 'Student Placed Data - Company : ' + this.job.company_name + ' - Profile : ' + this.job.job_profile ,
      // useBom: true,
      // noDownload: false,
      headers: this.getHeaders()
    };

    new ngxCsv(this.formatedData, 'StudentData', options); 
  }

  private saveJobProcess() {
    this.jobprocess.job_post_id = this.job.id;
    this.utilService.addJobProcess(this.jobprocess).subscribe();
  }
}