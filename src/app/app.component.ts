import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  private socket:any;
  private numberOfOnlineUsers: number;
  private notification:any="";

  constructor(){
    this.socket = io();
  }

  ngOnInit() {
    this.socket.on('numberOfOnlineUsers',(numberOfOnlineUsers)=>{
      this.numberOfOnlineUsers = numberOfOnlineUsers;
    });
    this.socket.on('pushNotification',(pushNotification)=>{
      this.notification = pushNotification;
    });
  }

  pushButton()
  {
    this.socket.emit('pushButton', 'tobi', (data) => {
      console.log(data); // data will be 'woot'
    });
  }
}
