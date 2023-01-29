import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {Server} from "./server.model";
import {ActivatedRoute, Params, Route} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponentItem implements OnInit {

   server?: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router:Route,
              private route: ActivatedRoute
              ) { };

  ngOnInit() {
    var serverId = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverId);
    // debugger;
    console.log(this.server);
    this.route.params.subscribe(
      (params: Params) =>{
        this.server = this.serversService.getServer(params['id'])
      }
    )
  };

}
