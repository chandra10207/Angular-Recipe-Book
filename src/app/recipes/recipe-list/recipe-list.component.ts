import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Recipe 1","test description 1", 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe("Recipe 2","test description 2", 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

 

}
