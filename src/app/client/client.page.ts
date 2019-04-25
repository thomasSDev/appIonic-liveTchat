import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from '../core/modele/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  listeClient: string[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.listeClients();
  }

  listeClients(){
    this.clientService.getListeClients().subscribe(res =>{
      console.log(res);
      this.listeClient = res;
      this.listeClient = this.listeClient.reverse();
    }),error=>{
      console.log(error);
    }
  }

}
