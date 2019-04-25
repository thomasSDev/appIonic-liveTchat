import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(public httpClient: HttpClient) { }
  signup(username: string, password: string): Observable<Object>{

    let params = "username=" + username;
    params = params + "&pwd=" + password;

    return this.httpClient.post<Object>(environment.URL + "signup", params);
  }
}
