import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token:string="";
  private tokenInSession: string="";
  private KEY:string = "token";

  constructor() { }

  getToken():string{
    this.tokenInSession = sessionStorage.getItem(this.KEY); 
    console.log(sessionStorage.getItem(this.KEY));   
    if(this.tokenInSession == null){
      return "";
    }
    return this.tokenInSession;
  }

  setToken(value: any){
    console.log("set token "+this.token);
    this.token = value;
    sessionStorage.setItem(this.KEY,this.token);  
  }

  // Sign out 
  SignOut() {
    return sessionStorage.removeItem('token');
    
  }
}
