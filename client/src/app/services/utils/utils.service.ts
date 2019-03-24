import { Injectable } from '@angular/core';
import { College } from '../../models/college';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Branch } from '../../models/branch';
import { SkillSet } from '../../models/skill-set';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private collegeUrl = 'http://localhost:4000/api/college';  // URL to web api
  private branchUrl = 'http://localhost:4000/api/branch';  // URL to web api
  private skillSetUrl = 'http://localhost:4000/api/skill_set';
  constructor( 
    private http: HttpClient
  ) { }

  getColleges (): Observable<College[]> {
    console.log((this.collegeUrl));
    return this.http.get<College[]>(this.collegeUrl);
  }

  getCollege(id: string): Observable<College> {
    const url = `${this.collegeUrl}/${id}`;
    return this.http.get<College>(url);
  }

  addCollege (College: College): Observable<College> {
    console.log(this.http.post<College>(this.collegeUrl, College, httpOptions))
    return this.http.post<College>(this.collegeUrl, College, httpOptions);
  }

  deleteCollege (College: College | string): Observable<College> {
    const id = typeof College === 'string' ? College : College.id;
    const url = `${this.collegeUrl}/${id}`;

    return this.http.delete<College>(url, httpOptions);
  }

  updateCollege (College: College): Observable<any> {
    return this.http.put(this.collegeUrl, College, httpOptions);
  }

  getBranches (): Observable<Branch[]> {
    console.log((this.branchUrl));
    return this.http.get<Branch[]>(this.branchUrl);
  }

  getBranch(id: string): Observable<Branch> {
    const url = `${this.branchUrl}/${id}`;
    return this.http.get<Branch>(url);
  }

  addBranch (Branch: Branch): Observable<Branch> {
    console.log(this.http.post<Branch>(this.branchUrl, Branch, httpOptions))
    return this.http.post<Branch>(this.branchUrl, Branch, httpOptions);
  }

  deleteBranch (Branch: Branch | string): Observable<Branch> {
    const id = typeof Branch === 'string' ? Branch : Branch.id;
    const url = `${this.branchUrl}/${id}`;

    return this.http.delete<Branch>(url, httpOptions);
  }

  updateBranch (Branch: Branch): Observable<any> {
    return this.http.put(this.branchUrl, Branch, httpOptions);
  }

  getSkillSets (): Observable<SkillSet[]> {
    console.log((this.skillSetUrl));
    return this.http.get<SkillSet[]>(this.skillSetUrl);
  }

  getSkillSet(id: string): Observable<SkillSet> {
    const url = `${this.skillSetUrl}/${id}`;
    return this.http.get<SkillSet>(url);
  }

  addSkillSet (SkillSet: SkillSet): Observable<SkillSet> {
    console.log(this.http.post<SkillSet>(this.skillSetUrl, SkillSet, httpOptions))
    return this.http.post<SkillSet>(this.skillSetUrl, SkillSet, httpOptions);
  }

  deleteSkillSet (SkillSet: SkillSet | string): Observable<SkillSet> {
    const id = typeof SkillSet === 'string' ? SkillSet : SkillSet.id;
    const url = `${this.skillSetUrl}/${id}`;

    return this.http.delete<SkillSet>(url, httpOptions);
  }

  updateSkillSet (SkillSet: SkillSet): Observable<any> {
    return this.http.put(this.skillSetUrl, SkillSet, httpOptions);
  }

}