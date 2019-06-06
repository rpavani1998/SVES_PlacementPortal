import { Component, OnInit , Input} from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student/student.service';
import { UploadFileService } from '../services/file/file.service';
import { Achievement } from '../models/achievement';
import { Branch } from '../models/branch';
import { UtilsService } from '../services/utils/utils.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})

export class StudentProfileComponent  implements OnInit {

  student: Student;
  data = [];
  branches = {};
  img_id = 'student'
  @Input() fileUpload: string;

  constructor(private studentService: StudentService,
    private uploadService: UploadFileService,
    private utilService: UtilsService) {}

  ngOnInit(): void {
    this.utilService.getBranches().subscribe(branches => {
      branches.forEach(branch => {
        this.branches[branch.id] = branch.branch_name;
        console.log(branch.id, branch.branch_name)
        })
      })
    this.getStudentDetails();
  }

  generatePDF(){
      this.uploadService.generateTex(this.student).subscribe();
      for(let i = 0; i < 1000; i++){}
      // this.uploadService.downloadPdf(this.student.roll_no).subscribe();
      window.location.href = 'http://localhost:4000/api/profile/'+this.student.roll_no;
  }
  getStudentDetails() {
    const id = localStorage.getItem('currentUser');
    this.uploadService.getFileById(id).subscribe(result =>{
      if(result){
        this.img_id = id;
    }
  });
    console.log(this.studentService.getVerifiedStudent(id)
    .subscribe(student => {
      this.student = student
      this.studentService.getVerifiedStudentEducationalDetails(id)
      .subscribe(educationDetails => 
        this.student.education_details = educationDetails)
      this.studentService.getVerifiedStudentExperienceDetails(id)
        .subscribe(experienceDetails => {
          this.student.experience_details = experienceDetails
          console.log(experienceDetails)
        })
        this.studentService.getAchievements(id)
        .subscribe(achievement => {
          this.student.achievements = achievement
        })
        this.studentService.getProjects(id)
        .subscribe(projects => {
          this.student.projects = projects
        })
      this.data.push(student);
    }))
  
    return this.student;
 }
}
