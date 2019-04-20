import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationDetails } from 'src/app/models/notifications';
import { Student } from 'src/app/models/student';
import { ExperienceDetails } from 'src/app/models/experience-details';
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
  private notificationsUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications';
  private rejectnotificationUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications/reject';
  private filterdataUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/studentdetails';
  private acceptprofilenotificationsUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications/profileaccept';
  private rejectprofilenotificationUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications/profilereject';
  private acceptexpnotificationsUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications/expaccept';
  private rejecexptnotificationUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/notifications/expreject';
   

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
 
  rejectRequest (edudata : EducationDetails): Observable<any> {
    console.log( " In Service Education Details :  " , edudata );
    return this.http.put(this.rejectnotificationUrl, edudata , httpOptions); 
  }

  approveProfileRequest (profiledata : Student): Observable<any> {
    console.log( " In Service Education Details :  " , profiledata );
    return this.http.put(this.acceptprofilenotificationsUrl , profiledata , httpOptions); 
  }
 
  rejectProfileRequest (profiledata : Student): Observable<any> {
    console.log( " In Service Education Details :  " , profiledata );
    return this.http.put(this.rejectprofilenotificationUrl , profiledata , httpOptions); 
  }

  approveExperienceRequest (expdata : ExperienceDetails): Observable<any> {
    console.log( " In Service Education Details :  " , expdata );
    return this.http.put(this.acceptexpnotificationsUrl , expdata , httpOptions); 
  }
 
  rejectExperienceRequest (expdata : ExperienceDetails): Observable<any> {
    console.log( " In Service Education Details :  " , expdata );
    return this.http.put(this.rejecexptnotificationUrl , expdata , httpOptions); 
  }

  getFilterData (college : string , major : string , percentage : number , passing_year: number ,  backlogs : number): Observable<EducationDetails[]> {
    console.log((`${this.filterdataUrl}/${college}/${major}/${passing_year}/${percentage}/${backlogs}`))
    console.log("College : " , college);
    return this.http.get<EducationDetails[]>(`${this.filterdataUrl}/${college}/${major}/${passing_year}/${percentage}/${backlogs}`);
  }
}