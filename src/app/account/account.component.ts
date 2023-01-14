import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountService} from "../services/account.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService) {}
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountService.UpdateAccountStatus(this.id,status)
    // this.loggingService.logStatusChange(status);
  }
}
