import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobPosts } from 'src/app/models/jobposts';
// import { EditJobPosts } from './editjobposts';
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
export class EditjobpostService {

  private editjobpostUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/editjobposts';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  updateJobPost (jobdata: JobPosts[]): Observable<any> { 
    return this.http.put(this.editjobpostUrl, jobdata, httpOptions);
  } 
}