import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(environment.baseUrl + 'comments');
  }
  sendMessages(name: string, text: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'comments', {name, text});

  }
}
