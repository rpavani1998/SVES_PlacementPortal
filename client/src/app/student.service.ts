import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { EducationDetails } from './education-details';
import { ExperienceDetails } from './experience-details';

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

  constructor( 
    private http: HttpClient
  ) { }

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

  getStudentEducationalDetails (id: string): Observable<EducationDetails[]> {
    console.log((`${this.educationDetailsUrl}/${id}`))
    return this.http.get<EducationDetails[]>(`${this.educationDetailsUrl}/${id}`);
  }

  deleteStudent (student: Student | string): Observable<Student > {
    const id = typeof student === 'string' ? student : student.roll_no;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions);
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
  updateStudentEducationalDeails (educationDetails: EducationDetails): Observable<any> {
    return this.http.put(this.studentsUrl, educationDetails, httpOptions);
  }
  updateStudentExperienceDetails (experienceDetails: ExperienceDetails): Observable<any> {
    return this.http.put(this.studentsUrl, experienceDetails, httpOptions);
  }
}