import { Component, EventEmitter,Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
  styles: [
    'h1 { font-weight: normal; }',
    '.dropdown.show .dropdown-menu{ display: block !important;}',
  ]
})
export class HeaderComponent{

    @Output() current_state = new EventEmitter<string>();
    activeState = '';

    setActiveState(state:string){

        this.activeState = state;
        this.current_state.emit(this.activeState);
    }

}
