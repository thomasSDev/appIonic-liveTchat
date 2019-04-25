import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  public username: string;
  public password: string;
  public confirmPassword: string;

  constructor(public inscriptionService: InscriptionService, public router: Router) { }

  ngOnInit() {

  }

  signup(){
    console.log(this.username, ' ', this.password);
    if(this.password === this.confirmPassword){
      this.inscriptionService.signup(this.username, this.password)
      .subscribe(res => {
        this.router.navigate(["home"]);
        console.log(res);
      })
    }else{
      alert("La confirmation du password n'est pas valide !");
    }
    
  }

}
