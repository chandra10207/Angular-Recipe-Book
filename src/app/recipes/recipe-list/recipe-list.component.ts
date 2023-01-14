import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.modal';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

  }

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }



}
