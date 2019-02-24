import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

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
  private studentsUrl = 'http://localhost:4000/api/students';  // URL to web api
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
  
  

  addStudent (student: Student): Observable<Student> {
    console.log(this.http.post<Student>(this.studentsUrl, student, httpOptions))
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  deleteStudent (student: Student | string): Observable<Student> {
    const id = typeof student === 'string' ? student : student.roll_no;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions);
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
}