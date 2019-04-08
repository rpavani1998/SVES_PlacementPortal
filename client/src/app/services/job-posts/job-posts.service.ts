import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPost } from '../../models/job-post';
import { JobPostActivity } from '../../models/job-post-activity';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class JobPostsService {

  private jobpostsUrl = 'http://localhost:4000/api/jobposts';
  private jobPosActivitytUrl = 'http://localhost:4000/api/jobpost';

  constructor(
    private http: HttpClient
  ) { }
  
  getJobPosts (): Observable<JobPost[]> {
    console.log((this.jobpostsUrl));
    return this.http.get<JobPost[]>(this.jobpostsUrl);
  }

  registerJobPost(roll_no: string, id: string): Observable<JobPost> {
    const url = `${this.jobPosActivitytUrl}/${roll_no}/${id}`;
    return this.http.get<JobPost>(url);
  }

  getAppliedJobDetails(roll_no: string): Observable<JobPostActivity[]> {
    const url = `${this.jobpostsUrl}/applied/${roll_no}`;
<<<<<<< HEAD
    console.log(url)
=======
>>>>>>> 7d2bba97b9eb2faa3acbfa42495cd98f7680fdd3
    return this.http.get<JobPostActivity[]>(url);
  }

  getJobDetails(companyid: string): Observable<JobPost> {
    const url = `${this.jobpostsUrl}/${companyid}`;
    return this.http.get<JobPost>(url);
  }

  getJobData(id: string): Observable<JobPost> {
    const url = `${this.jobpostsUrl}/${id}`;
    return this.http.get<JobPost>(url);
  }

  deleteJobPost ( jobid : JobPost | number): Observable<JobPost> {
    const id = typeof jobid === 'number' ? jobid : jobid.id;
    const url = `${this.jobpostsUrl}/${id}`;

    return this.http.delete<JobPost>(url, httpOptions);
  }
}
