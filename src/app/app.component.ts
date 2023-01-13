import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularRecepieBook';
  activeState = 'recipe';


  getCurrentState($event:string){
    this.activeState = $event;
    console.log(this.activeState);
  }
}
