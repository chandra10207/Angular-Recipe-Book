import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";
@Injectable()
export class AccountService{
  constructor(private loggingService:LoggingService) {
  }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  StatusUpdated = new EventEmitter<string>();
  AddAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status)
  }
  UpdateAccountStatus(id:number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status)
  }
}
