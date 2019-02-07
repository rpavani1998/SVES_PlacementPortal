import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:4000/api/users';  // URL to web api
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

  deleteUser (User: User | string): Observable<User> {
    const id = typeof User === 'string' ? User : User.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (User: User): Observable<any> {
    return this.http.put(this.usersUrl, User, httpOptions);
  }
}