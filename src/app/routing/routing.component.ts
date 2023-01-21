import { Component, OnInit } from '@angular/core';
import {UsersComponent} from "./users/users.component";
import {ServersService} from "./servers/servers.service";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
  providers: [ServersService]
})


export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
