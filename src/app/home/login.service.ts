import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  // public getHeaders() : Headers{
  //   const headers = new Headers();
  //   headers.append("Content-Type", "application/x-www-form-urlencoded");

  //   return headers;
  // }
  public doLogin(username: string, password: string): Observable<Object>{

    let params = "username=" + username;
    params = params + "&pwd=" + password;

    return this.http.post<Object>(environment.URL + "signin", params);
  }
}
