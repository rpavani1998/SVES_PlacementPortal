import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosts } from 'src/app/models/jobposts';
// import { JobPosts } from './jobposts';



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

  private jobpostsUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/jobposts';

  private closejobpostsUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/closejobposts';

  private internshipjobposts = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/internshipjobposts';

  private jobprofileUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/jobprofile';

  constructor(
    private http: HttpClient 
  ) { }
   
  getJobPosts (): Observable<JobPosts[]> {
    console.log((this.jobpostsUrl));
    return this.http.get<JobPosts[]>(this.jobpostsUrl);
  }

  getInternshipJobPosts (): Observable<JobPosts[]> {
    console.log((this.internshipjobposts));
    return this.http.get<JobPosts[]>(this.jobpostsUrl);
  }

  getJobProfile(jobprofile : string) : Observable<JobPosts> {
    const url = `${this.jobprofileUrl}/${jobprofile}`;
    return this.http.get<JobPosts>(url);
  }

  getJobDetails(companyid: string): Observable<JobPosts> {
    const url = `${this.jobpostsUrl}/${companyid}`;
    return this.http.get<JobPosts>(url);
  } 

  getJobData(companyid: number): Observable<JobPosts> {
    const url = `${this.jobpostsUrl}/${companyid}`;
    console.log("Job Data : " , url)
    return this.http.get<JobPosts>(url);
  }
  
  deleteJobPost ( jobid : JobPosts | number): Observable<JobPosts> {
    const id = typeof jobid === 'number' ? jobid : jobid.id;
    console.log("ID from service : " , id)
    const url = `${this.jobpostsUrl}/${id}`;
    return this.http.delete<JobPosts>(url, httpOptions);
  } 

  closeJobPost( jobid : number): Observable<JobPosts> {
    const url = `${this.closejobpostsUrl}/${jobid}`; 
    return this.http.put<JobPosts>(url , httpOptions);
  }
  
} 