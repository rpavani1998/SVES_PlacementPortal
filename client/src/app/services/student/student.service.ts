import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { EducationDetails } from '../../models/education-details';
import { ExperienceDetails } from '../../models/experience-details';
import { StudentPlacementStatus } from '../../models/student-placement-status';
import { Achievement } from 'src/app/models/achievement';
import {Project} from 'src/app/models/project'

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable({
  providedIn: 'root'
}) 
export class StudentService {
  private studentsUrl = 'http://localhost:4000/api/students'; 
  private educationDetailsUrl = 'http://localhost:4000/api/student/education_details'; 
  private experienceDetailsUrl = 'http://localhost:4000/api/student/experience_details'; 
  private verifiedStudentsUrl = 'http://localhost:4000/api/student_verified'; 
  private filtereddataUrl = 'http://localhost:4000/api/filtereddata'; 
  private verifiedEducationDetailsUrl = 'http://localhost:4000/api/student/education_details_verified'; 
  private verifiedExperienceDetailsUrl = 'http://localhost:4000/api/student/experience_details_verified'; 
  private placedStudentsUrl = 'http://localhost:4000/api/placedstudents'; 
  private jobprocessplacedStudentsUrl = 'http://localhost:4000/api/jobprocessplacedstudents'; 
  private achievementUrl = 'http://localhost:4000/api/achievement';  // URL to web api// URL to web api
  private projectUrl = 'http://localhost:4000/api/project';
  private profileUrl = "http://localhost:4000/api/profile";
  constructor( 
    private http: HttpClient 
  ) { }

  approveRequest (studdata : Student): Observable<any> {
    console.log( " In Service Education Details :  " , studdata );
    return this.http.put(this.studentsUrl, studdata , httpOptions); 
  }
 
  rejectRequest (studdata : Student): Observable<any> {
    console.log( " In Service Education Details :  " , studdata );
    return this.http.put(this.studentsUrl, studdata , httpOptions); 
  }

  getStudents (): Observable<Student[]> {
    console.log((this.studentsUrl));
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id: string): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    console.log("Student URL : " , url)
    return this.http.get<Student>(url);
  } 

  getFilteredData( passingyear : number , major : string ) : Observable<EducationDetails[]> {
    const url = `${this.filtereddataUrl}/${passingyear}/${major}`;
    console.log(url)
    return this.http.get<EducationDetails[]>(url);
  }

  getFilteredDataList ( roll_no : string , passingyear : number , major : string ) : Observable<EducationDetails[]> {
    const url = `${this.filtereddataUrl}/${roll_no}/${passingyear}/${major}`;
    console.log(url)
    return this.http.get<EducationDetails[]>(url);
  } 

  getVerifiedS(branch : string) :Observable<EducationDetails> {
    const url = `${this.verifiedStudentsUrl}/${branch}`;
    return this.http.get<EducationDetails>(url);
  }

  getJobProcessPlacedStudents( roll_no : string ,  jobid : number) : Observable<StudentPlacementStatus[]> {
    const url = `${this.jobprocessplacedStudentsUrl}/${jobid}/${roll_no}`;
    return this.http.get<StudentPlacementStatus[]>(url);
  }

  getJobProcessStudent(jobid : number, roll_no: string) : Observable<StudentPlacementStatus[]> {
    const url = `${this.jobprocessplacedStudentsUrl}/${jobid}/${roll_no}`;
    return this.http.get<StudentPlacementStatus[]>(url);
  }

  getPlacedStudents(roll_no : string , jobid : number) : Observable<StudentPlacementStatus[]> {
    const url = `${this.placedStudentsUrl}/${roll_no}/${jobid}`;
    return this.http.get<StudentPlacementStatus[]>(url);
  }

  getPlacedStudentsList( jobid : number) : Observable<StudentPlacementStatus[]> {
    const url = `${this.placedStudentsUrl}/${jobid}`;
    return this.http.get<StudentPlacementStatus[]>(url);
  } 

  getVerifiedStudentDetails(branch : string) :Observable<EducationDetails[]> {
    const url = `${this.verifiedStudentsUrl}/${branch}`;
    console.log("URL : " , url)
    return this.http.get<EducationDetails[]>(url);
  }

  addStudentProfile (student: Student): Observable<Student> {
    console.log(this.http.post<Student>(this.studentsUrl, student, httpOptions))
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  addStudentEducationDetails (educationDetails: EducationDetails): Observable<EducationDetails> {
    return this.http.post<EducationDetails>(this.educationDetailsUrl, educationDetails);
  }

 addStudentExperienceDetails (experienceDetails: ExperienceDetails): Observable<ExperienceDetails> {
    return this.http.post<ExperienceDetails>(this.experienceDetailsUrl, experienceDetails);
  }

  getStudentExperienceDetails (id: string): Observable<ExperienceDetails[]> {
    return this.http.get<ExperienceDetails[]>(`${this.experienceDetailsUrl}/${id}`);
  }

  getStudentexperiences (): Observable<ExperienceDetails[]> {
    console.log((this.experienceDetailsUrl));
    return this.http.get<ExperienceDetails[]>(this.experienceDetailsUrl);
  }

  getStudentEducationalDetails (id: string): Observable<EducationDetails[]> {
    console.log((`${this.educationDetailsUrl}/${id}`))
    return this.http.get<EducationDetails[]>(`${this.educationDetailsUrl}/${id}`);
  }

  getStudentProfiles(branchid: string): Observable<Student> {
    const url = `${this.educationDetailsUrl}/${branchid}`;
    console.log("Student Profiles : " , url);
    return this.http.get<Student>(url);
  } 

  deleteStudent (student: Student | string): Observable<Student > {
    const id = typeof student === 'string' ? student : student.roll_no;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions);
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
  updateStudentEducationalDetails (educationDetails: EducationDetails): Observable<any> {
    return this.http.put(this.studentsUrl, educationDetails, httpOptions);
  }
  updateStudentExperienceDetails (experienceDetails: ExperienceDetails): Observable<any> {
    return this.http.put(this.studentsUrl, experienceDetails, httpOptions);
  }


  getVerifiedStudents (): Observable<Student[]> {
    console.log((this.verifiedStudentsUrl));
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getVerifiedStudent(id: string): Observable<Student> {
    const url = `${this.verifiedStudentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  addVerifiedStudentProfile (student: Student): Observable<Student> {
    console.log(this.http.post<Student>(this.verifiedStudentsUrl, student, httpOptions))
    return this.http.post<Student>(this.verifiedStudentsUrl, student, httpOptions);
  }

  addVerifiedStudentEducationDetails (educationDetails: EducationDetails): Observable<EducationDetails> {
    return this.http.post<EducationDetails>(this.verifiedEducationDetailsUrl, educationDetails);
  }

 addVerifiedStudentExperienceDetails (experienceDetails: ExperienceDetails): Observable<ExperienceDetails> {
    return this.http.post<ExperienceDetails>(this.verifiedExperienceDetailsUrl, experienceDetails);
  }

  getVerifiedStudentExperienceDetails (id: string): Observable<ExperienceDetails[]> {
    return this.http.get<ExperienceDetails[]>(`${this.verifiedExperienceDetailsUrl}/${id}`);
  }

  getVerifiedStudentEducationalDetails (id: string): Observable<EducationDetails[]> {
    console.log((`${this.verifiedEducationDetailsUrl}/${id}`))
    return this.http.get<EducationDetails[]>(`${this.verifiedEducationDetailsUrl}/${id}`);
  }

  updateVerifiedStudent (student: Student): Observable<any> {
    return this.http.put(this.verifiedStudentsUrl, student, httpOptions);
  }
  updateVerifiedStudentEducationalDeails (educationDetails: EducationDetails): Observable<any> {
    return this.http.put(this.verifiedStudentsUrl, educationDetails, httpOptions);
  }
  updateVerifiedStudentExperienceDetails (experienceDetails: ExperienceDetails): Observable<any> {
    return this.http.put(this.studentsUrl, experienceDetails, httpOptions);
  }

  getAchievements (roll_no: string): Observable<Achievement[]> {
    console.log(`${this.achievementUrl}s/${roll_no}`);
    return this.http.get<Achievement[]>(`${this.achievementUrl}s/${roll_no}`);
  }

  getAchievement(id: string): Observable<Achievement[]> {
    const url = `${this.achievementUrl}/${id}`;
    return this.http.get<Achievement[]>(url);
  }

  addAchievement (Achievement: Achievement): Observable<Achievement> {
    console.log(this.http.post<Achievement>(this.achievementUrl, Achievement, httpOptions))
    return this.http.post<Achievement>(this.achievementUrl, Achievement, httpOptions);
  }

  deleteAchievement (Achievement: Achievement | string): Observable<Achievement> {
    const id = typeof Achievement === 'string' ? Achievement :Achievement.id;
    const url = `${this.achievementUrl}/${id}`;

    return this.http.delete<Achievement>(url, httpOptions);
  }

  updateAchievement (Achievement: Achievement): Observable<any> {
    return this.http.put(this.achievementUrl, Achievement, httpOptions);
  }

  getProjects (roll_no: string): Observable<Project[]> {
    console.log(`${this.projectUrl}s/${roll_no}`);
    return this.http.get<Project[]>(`${this.projectUrl}s/${roll_no}`);
  }

  getProject(id: string): Observable<Project[]> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project[]>(url);
  }

  addProject (Project: Project): Observable<Project> {
    console.log(this.http.post<Project>(this.projectUrl, Project, httpOptions))
    return this.http.post<Project>(this.projectUrl, Project, httpOptions);
  }

  deleteProject (Project: Project | string): Observable<Project> {
    const id = typeof Project === 'string' ? Project :Project.id;
    const url = `${this.projectUrl}/${id}`;

    return this.http.delete<Project>(url, httpOptions);
  }
  updateProject (Project: Project): Observable<any> {
    return this.http.put(this.projectUrl, Project, httpOptions);
  }

  generateTex(Student : Student): Observable<any> {
    const url = `${this.profileUrl}/tex`;
    console.log(url)
    return this.http.post(url, Student, httpOptions);
  }

  generatePdf(Student: Student): Observable<any> {
    const url = `${this.profileUrl}/pdf`;
    return this.http.post(url, Student, httpOptions);
  }
}