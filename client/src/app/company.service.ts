import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
export class CompanyService {

  private companyUrl = 'http://localhost:4000/api/company';

  constructor(
    private http: HttpClient
  ) { }

  addCompany (company: Company): Observable<Company> {
    console.log(this.http.post<Company>(this.companyUrl, company, httpOptions))
    return this.http.post<Company>(this.companyUrl, company, httpOptions);
  }

}
