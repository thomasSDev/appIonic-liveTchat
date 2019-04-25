import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: string;
  public password: string;

  constructor(public loginService: LoginService, public router: Router){
    
  }
  login(){
    console.log(this.username, ' ', this.password);
    this.loginService.doLogin(this.username, this.password)
    .subscribe(res => {
      this.router.navigate(["tchat"]);
      console.log(res);
    })
  }
}
