import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import {Competition} from '../../models/competition';
import {CompRegistration} from '../../models/comp-registartion';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private competitionsUrl = 'http://localhost:4000/api/competitions';
  private jobPosActivitytUrl = 'http://localhost:4000/api/competition';

  constructor(
    private http: HttpClient
  ) { }
  
  getCompetitions (): Observable<Competition[]> {
    console.log((this.competitionsUrl));
    return this.http.get<Competition[]>(this.competitionsUrl);
  }

  registerCompetition(roll_no: string, id: string): Observable<Competition> {
    const url = `${this.jobPosActivitytUrl}/${roll_no}/${id}`;
    return this.http.get<Competition>(url);
  }

  getAppliedCompetitionDetails(roll_no: string): Observable<CompRegistration[]> {
    const url = `${this.competitionsUrl}/applied/${roll_no}`;
    return this.http.get<CompRegistration[]>(url);
  }

  getCompetitionDetails(companyid: string): Observable<Competition> {
    const url = `${this.competitionsUrl}/${companyid}`;
    return this.http.get<Competition>(url);
  }

  getJobData(id: string): Observable<Competition> {
    const url = `${this.competitionsUrl}/${id}`;
    return this.http.get<Competition>(url);
  }

  deleteCompetition ( jobid : Competition | number): Observable<Competition> {
    const id = typeof jobid === 'number' ? jobid : jobid.id;
    const url = `${this.competitionsUrl}/${id}`;
    return this.http.delete<Competition>(url, httpOptions);
  }
}
