import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

  constructor() { }


  activeRecipeState = 'recipe';


  getCurrentState($event:string){
    this.activeRecipeState = $event;
    console.log(this.activeRecipeState);
  }


  ngOnInit(): void {
  }

}
