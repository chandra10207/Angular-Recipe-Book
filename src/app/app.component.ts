// import { Component, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'AngularRecepieBook';
//   activeState = 'recipe';


//   getCurrentState($event:string){
//     this.activeState = $event;
//     console.log(this.activeState);
//   }
// }


import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5]
  evenNumbers = [2,4,6]
  onlyOdd = false
  switchValue = 35;
}