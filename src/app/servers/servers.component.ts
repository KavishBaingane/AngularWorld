import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //select by class downwarss
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  // template:`<app-server></app-server>
  //            <app-server></app-server>`,
  styleUrls:['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus = "No server was created!";

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 10000);
  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created"
  }
}
