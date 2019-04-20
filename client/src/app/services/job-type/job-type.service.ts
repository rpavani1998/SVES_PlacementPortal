import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobType } from '../../models/job-type';

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

  private jobtypeUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/jobtype';

  constructor(
    private http: HttpClient
  ) { }

  getJobType (): Observable<JobType[]> {
    console.log((this.jobtypeUrl));
    return this.http.get<JobType[]>(this.jobtypeUrl);
  }
}
