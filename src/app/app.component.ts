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
  private chatLog:any=[];
  private username:any="";
  private content:any="";

  constructor(){
    this.socket = io();
  }

  ngOnInit() {
    //fetch Data from Nodejs server
    this.socket.on('numberOfOnlineUsers',(numberOfOnlineUsers)=>{
      this.numberOfOnlineUsers = numberOfOnlineUsers;
    });
    this.socket.on('chatLog',(chatLog)=>{
      this.chatLog = chatLog;
    });
  }

  /**
   * onSubmit submit data to NodeJS server
   */
  onSubmit()
  {
    var param={
      'username':this.username,
      'content':this.content
    };
    this.socket.emit('onSubmit', param, (data) => {
    });
  }
}
