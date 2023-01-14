import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import {AccountService} from "../services/account.service";
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accontService:AccountService) {
  }

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {

    // console.log('A server status changed, new status: ' + accountStatus); // replaced with logging service
    this.loggingService.logStatusChange(accountStatus)
  }
}
