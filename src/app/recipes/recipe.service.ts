import {Recipe} from "./recipe.modal";
import {EventEmitter} from "@angular/core";
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Recipe 1","test description 1", 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe("Recipe 2","test description 2", 'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
  ]
  getRecipes(){
    return this.recipes.slice();   // Get a copy of recipes array
  }

}
