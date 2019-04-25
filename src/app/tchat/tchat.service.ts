import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TchatService {

  constructor(public http: HttpClient) { }

  sendMessage(texteMessage: string){

    let params: string = "message=" + texteMessage
    return this.http.post(environment.URL + "messages", params);
  }

  getMessages(): Observable<any>{
    return this.http.get(environment.URL + "messages")
  }
}
