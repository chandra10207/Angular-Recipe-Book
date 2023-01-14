import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-services-dependancy-injection',
  templateUrl: './services-dependancy-injection.component.html',
  styleUrls: ['./services-dependancy-injection.component.scss'],
  providers:[LoggingService,AccountService]
})
export class ServicesDependancyInjectionComponent implements OnInit {

  accounts: {name:string, status:string}[] = [];

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // this.loggingService.logStatusChange(this.accounts.toString());

  }




}
