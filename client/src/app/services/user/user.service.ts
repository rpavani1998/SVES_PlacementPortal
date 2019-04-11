import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { EducationDetails } from 'src/app/models/notifications';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/users';  // URL to web api
  private eligiblestudentsUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/placements';
  
  constructor( 
    private http: HttpClient
  ) { }

  getUsers (): Observable<User[]> {
    console.log((this.usersUrl));
    return this.http.get<User[]>(this.usersUrl);
  }

  authenticate (id: string, password: string): Observable<User[]> {
    const data = {
      id, password
    }
    return this.http.post<User[]>(`${this.usersUrl}/login/`, data , httpOptions);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser (User: User): Observable<User> {
    console.log(this.http.post<User>(this.usersUrl, User, httpOptions))
    return this.http.post<User>(this.usersUrl, User, httpOptions);
  }

  getUsersData(percentage : string): Observable<EducationDetails[]> {
    const url = `${this.eligiblestudentsUrl}/${percentage}`;
    return this.http.get<EducationDetails[]>(url);
  }

  deleteUser (User: User | string): Observable<User> {
    const id = typeof User === 'string' ? User : User.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (User: User): Observable<any> {
    return this.http.put(this.usersUrl, User, httpOptions);
  }

  isLoggedIn(): Observable<isLoggedIn> {
    const url = `${this.usersUrl}/isLoggedIn`;
    return this.http.get<isLoggedIn>(url)
  }

  logout() {
    const url = `${this.usersUrl}/logout`;
    return this.http.get<logoutStatus>(url)
  }
}