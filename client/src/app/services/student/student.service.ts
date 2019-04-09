import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { EducationDetails } from '../../models/education-details';
import { ExperienceDetails } from '../../models/experience-details';

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
  private studentsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/students'; 
  private educationDetailsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/student/education_details'; 
  private experienceDetailsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/student/experience_details'; 
  private verifiedStudentsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/students_verified'; 
  private verifiedEducationDetailsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/student/education_details_verified'; 
  private verifiedExperienceDetailsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/student/experience_details_verified'; 

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
    return this.http.get<Student>(url);
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
}