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
    return this.http.post<ExperienceDetails>(this.educationDetailsUrl, experienceDetails);
  }

  deleteStudent (student: Student | string): Observable<Student > {
    const id = typeof student === 'string' ? student : student.roll_no;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions);
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
}