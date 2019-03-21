import { Component, OnInit , Input} from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student/student.service';
import { UploadFileService } from '../services/file/file.service';
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
  branches: Branch[];
  backlogs = ["Never had any backlog", "Cleared All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"];
  @Input() fileUpload: string;

  constructor(private studentService: StudentService,
    private uploadService: UploadFileService,
    private utilService: UtilsService,) {}

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    
    const id = localStorage.getItem('currentUser');
    console.log(this.studentService.getStudent(id)
    .subscribe(student => {
      this.utilService.getBranches().subscribe(branches => {
      branches.forEach(branch => {
        if(branch.id == student.branch){
          student.branch = branch.branch_name
        }
      })
          }
      )
      console.log("s",student)   
      this.studentService.getStudentEducationalDetails(id)
      .subscribe(educationDetails => 
        this.student.education_details = educationDetails)
      this.studentService.getStudentExperienceDetails(id)
        .subscribe(experienceDetails => 
          this.student.experience_details = experienceDetails)
        
    this.data.push(student);
    }))
 }
}
