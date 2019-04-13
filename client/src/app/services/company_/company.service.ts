import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { AddJob } from '../../models/addjob';

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

  private companyUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/company';
  private companyProfilesUrl = 'http://ec2-3-14-3-49.us-east-2.compute.amazonaws.com:4000/api/companyprofiles';

  constructor(
    private http: HttpClient
  ) { }

  addCompany (company: Company): Observable<Company> {
    console.log(this.http.post<Company>(this.companyUrl, company, httpOptions))
    return this.http.post<Company>(this.companyUrl, company, httpOptions);
  }
  
  getCompany (id: number): Observable<Company> {
    console.log((`${this.companyUrl}/${id}`))
    return this.http.get<Company>(`${this.companyUrl}/${id}`);
  }
 
  getCompanyProfiles (companyid: number): Observable<AddJob> {
    console.log((`${this.companyProfilesUrl}/${companyid}`))
    return this.http.get<AddJob>(`${this.companyProfilesUrl}/${companyid}`);
  }

  getCompanyData (): Observable<Company[]> {
    console.log((this.companyUrl));
    return this.http.get<Company[]>(this.companyUrl);
  }

}
