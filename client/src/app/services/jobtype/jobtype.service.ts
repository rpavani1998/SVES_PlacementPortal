import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobType } from 'src/app/models/jobtype';
// import { JobType } from './jobtype';
// import { Company } from './company';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  private jobtypeUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/jobtype';

  constructor(
    private http: HttpClient
  ) { }

  getJobType (id : number): Observable<JobType> {
    console.log((`${this.jobtypeUrl}/${id}`))
    return this.http.get<JobType>(`${this.jobtypeUrl}/${id}`);
  }


  getJobTypes (): Observable<JobType[]> {
    console.log((this.jobtypeUrl));
    return this.http.get<JobType[]>(this.jobtypeUrl);
  }
}