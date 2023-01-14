import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-dependancy-injection',
  templateUrl: './services-dependancy-injection.component.html',
  styleUrls: ['./services-dependancy-injection.component.scss']
})
export class ServicesDependancyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
  

}
