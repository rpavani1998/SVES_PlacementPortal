import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student} from '../../models/student'

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {


  constructor(private http: HttpClient) { }


  // saveStudentProfilesDataToDB(id: string, file: File): Observable<HttpEvent<{}>> {
  //   const formdata: FormData = new FormData();

  //   formdata.append('file', file);
  //   formdata.append('id', id);
  //   console.log("uploading data")
  //   const req = new HttpRequest('POST', 'http://localhost:4000/api/savestudentprofiledata/uploadspdata', formdata, {
  //     responseType: 'text'
  //   });

  //   return this.http.request(req);
  // }

  // saveUserAccountsDataToDB(id: string, file: File): Observable<HttpEvent<{}>> {
  //   const formdata: FormData = new FormData();

  //   formdata.append('file', file);
  //   formdata.append('id', id);
  //   console.log("uploading data")
  //   const req = new HttpRequest('POST', 'http://localhost:4000/api/saveuseraccountdata/uploaduadata', formdata, {
  //     responseType: 'text'
  //   });

  //   return this.http.request(req);
  // }

  pushFileToStorage(id: string, file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('id', id);
    console.log("uploading img")
    const req = new HttpRequest('POST', 'http://localhost:4000/api/file/upload', formdata, {
      responseType: 'text'
    }); 

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:4000/api/file/all');
  }

  getFileById(id: String): Observable<any>{
    console.log('http://localhost:4000/api/file/retrieve/'+id)
    return this.http.get('http://localhost:4000/api/file/retrieve/'+id);
  }
  
  deleteFile(id: String): Observable<any>{
    return this.http.delete('http://localhost:4000/api/file/'+id);
  }


  // generateTex(Student : Student): Observable<any> {
  //   const url = `${this.profileUrl}/tex`;
  //   console.log(url)
  //   return this.http.put<any>(url, Student, httpOptions);
  // }

  generateTex(Student: Student): Observable<any> {
    const url = 'http://localhost:4000/api/profile/pdf';
    console.log(this.http.post<any>(url, Student, httpOptions))
    return this.http.post<any>(url, Student, httpOptions);
  }

  downloadPdf(id: String): Observable<any>{
    console.log('http://localhost:4000/api/profile/'+id)
    return this.http.get('http://localhost:4000/api/profile/'+id);
  }


  // generatePdf(Student:Student): Observable<HttpEvent<{}>> {
  //   // const formdata: FormData = new FormData();

  //   // formdata.append('student', Student);
  //   // // formdata.append('id', id);
  //   // console.log("uploading img")
  //   const req = new HttpRequest('POST', 'http://localhost:4000/api/profile/pdf', Student, {
  //     responseType: 'text'
  //   }); 
  //   console.log(this.http.request(req))
  //   return this.http.request(req);
  // }
}
