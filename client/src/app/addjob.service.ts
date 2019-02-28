import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddJob } from './addjob';
import { Company } from './company';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};



@Injectable({
  providedIn: 'root'
})
export class AddjobService {

  private addjobUrl = 'http://localhost:4000/api/addjob';

  constructor(
    private http: HttpClient
  ) { }

  addJob (job: AddJob): Observable<AddJob> {
    console.log(this.http.post<AddJob>(this.addjobUrl, job, httpOptions))
    return this.http.post<AddJob>(this.addjobUrl, job, httpOptions);
  }

  getJob (): Observable<AddJob[]> {
    return this.http.get<AddJob[]>(this.addjobUrl);
  }

  getJobPosts (): Observable<AddJob[]> {
    return this.http.get<AddJob[]>(this.addjobUrl);
  }
  
}
