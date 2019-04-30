import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

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
}
