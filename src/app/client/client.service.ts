import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../core/modele/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: HttpClient) { }

  getListeClients():Observable<any>{

    return this.http.get(environment.URL + "users");
  }
}
