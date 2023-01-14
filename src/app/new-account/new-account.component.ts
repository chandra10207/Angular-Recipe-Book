import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import {AccountService} from "../services/account.service";
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accontService:AccountService) {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
   this.accontService.AddAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus)
  }
}
