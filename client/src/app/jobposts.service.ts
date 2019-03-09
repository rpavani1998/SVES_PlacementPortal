import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosts } from './jobposts';



const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class JobpostsService {

  private jobpostsUrl = 'http://localhost:4000/api/jobposts';

  constructor(
    private http: HttpClient
  ) { }
  
  getJobPosts (): Observable<JobPosts[]> {
    console.log((this.jobpostsUrl));
    return this.http.get<JobPosts[]>(this.jobpostsUrl);
  }

  getJobDetails(companyid: string): Observable<JobPosts> {
    const url = `${this.jobpostsUrl}/${companyid}`;
    return this.http.get<JobPosts>(url);
  }

  getJobData(companyid: string): Observable<JobPosts> {
    const url = `${this.jobpostsUrl}/${companyid}`;
    return this.http.get<JobPosts>(url);
  }

  deleteJobPost ( jobid : JobPosts | number): Observable<JobPosts> {
    const id = typeof jobid === 'number' ? jobid : jobid.id;
    const url = `${this.jobpostsUrl}/${id}`;

    return this.http.delete<JobPosts>(url, httpOptions);
  }
}
