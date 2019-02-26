import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/catch';

  @Injectable()
  export class UploadService {

    constructor(private http: HttpClient) {
    }

    send(data: any) {
      console.log("we are hitting the send data")
      return this.http.post('/index/upload', data);
    }
}
