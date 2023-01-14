export class AccountService{

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


  AddAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  UpdateAccountStatus(id:number, status: string) {
    this.accounts[id].status = status;
  }

}
