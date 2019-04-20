import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosts } from 'src/app/models/jobposts';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})

export class InternshipsService {

  
  private internshipjobposts = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/internshipjobposts';

  constructor(
    private http: HttpClient
  ) { }
  
  getInternshipJobPosts (): Observable<JobPosts[]> {
    console.log((this.internshipjobposts));
    return this.http.get<JobPosts[]>(this.internshipjobposts);
  }

}