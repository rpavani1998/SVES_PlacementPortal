import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddJobPost} from './addjobpost';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AddjobpostService {
  private addjobpostUrl = 'http://localhost:4000/api/addjobpost';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }


  addJob (company: AddJobPost): Observable<AddJobPost> {
    console.log(this.http.post<AddJobPost>(this.addjobpostUrl, company, httpOptions))
    return this.http.post<AddJobPost>(this.addjobpostUrl, company, httpOptions);
  }
}