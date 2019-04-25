import { Component, OnInit } from '@angular/core';
import { TchatService } from './tchat.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.page.html',
  styleUrls: ['./tchat.page.scss'],
})
export class TchatPage implements OnInit {

  public texteMessage: string;
  public listeMessage:any[];
  constructor(public tchatService: TchatService, private menu: MenuController) { }

  ngOnInit() {
    this.listeMessages();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  sendMessage(){
    console.log(this.texteMessage);
    this.tchatService.sendMessage(this.texteMessage)
    .subscribe(res => {
      console.log(res);
      this.listeMessages();
      this.texteMessage = "";
    }),error=>{
      console.log(error);
  }}

  listeMessages(){
    this.tchatService.getMessages().subscribe(res =>{
      console.log(res);
      this.listeMessage = res;
      this.listeMessage = this.listeMessage.reverse();
    }),error=>{
      console.log(error);
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.listeMessages();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 0);
  }

}
