import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from 'src/app/models/usertype';
// import { UserType } from '../ ./usertype';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsertypeService { 

  private usertypeUrl = 'http://ec2-3-16-147-224.us-east-2.compute.amazonaws.com:4000/api/usertype';  // URL to web api


  constructor(
    private http: HttpClient
  ) { }

  getUserTypes (): Observable<UserType[]> {
    console.log((this.usertypeUrl));
    return this.http.get<UserType[]>(this.usertypeUrl);
  }
  

  getUSerType(id: string): Observable<UserType> {
    console.log("Roll Number : " , id)
    const url = `${this.usertypeUrl}/${id}`;
    console.log("URL : " , url);
    return this.http.get<UserType>(url);
  } 

}
