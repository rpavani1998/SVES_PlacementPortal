import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};

@Injectable()
export class AuthService {

  private loggedInStatus = false
  private usersUrl = 'http://localhost:4000/api/users'; 
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(id, password) {
    // post these details to API server return user info if correct
    const data = {
      id, password
    }
    return this.http.post<myData>(`${this.usersUrl}/login/`, data , httpOptions);
   
  }

}
