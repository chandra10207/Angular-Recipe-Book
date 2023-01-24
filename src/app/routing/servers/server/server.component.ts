import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {Server} from "./server.model";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    var server = this.serversService.getServer(1);
    // debugger;
    console.log(server);
  }

}
