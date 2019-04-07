import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationDetails } from 'src/app/models/notifications';
// import { EducationDetails } from './notifications';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsUrl = 'http://localhost:4000/api/notifications';
  private filterdataUrl = 'http://localhost:4000/api/studentdetails';

  constructor(
    private http: HttpClient
  ) { }

  getEducationDetails (): Observable<EducationDetails[]> {
    console.log((this.notificationsUrl));
    return this.http.get<EducationDetails[]>(this.notificationsUrl);
  }

  getEducationData (id: string): Observable<EducationDetails> {
    console.log((`${this.notificationsUrl}/${id}`))
    console.log("Branch : " , id);
    return this.http.get<EducationDetails>(`${this.notificationsUrl}/${id}`);
  }

  approveRequest (edudata : EducationDetails): Observable<any> {
    console.log( " In Service Education Details :  " , edudata );
    return this.http.put(this.notificationsUrl, edudata , httpOptions); 
  }
 
  getFilterData (college : string , major : string , percentage : number , passing_year: number ,  backlogs : number): Observable<EducationDetails[]> {
    console.log((`${this.filterdataUrl}/${college}/${major}/${passing_year}/${percentage}/${backlogs}`))
    console.log("College : " , college);
    return this.http.get<EducationDetails[]>(`${this.filterdataUrl}/${college}/${major}/${passing_year}/${percentage}/${backlogs}`);
  }
}