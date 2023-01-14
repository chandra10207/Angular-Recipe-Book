import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountService} from "../services/account.service";
@Component({
  selector: 'app-services-dependancy-injection',
  templateUrl: './services-dependancy-injection.component.html',
  styleUrls: ['./services-dependancy-injection.component.scss'],
  // providers:[LoggingService]
})
export class ServicesDependancyInjectionComponent implements OnInit {
  accounts: {name:string, status:string}[] = [];
  constructor(private loggingService: LoggingService, private accountService: AccountService) { }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
