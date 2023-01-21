import {Recipe} from "./recipe.modal";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/Ingredient.model";
import ShoppingListService from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{

  constructor(private slService: ShoppingListService) {


  }


  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Recipe 1",
      "test description 1",
      'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
    [
      new Ingredient("Meat",1),
      new Ingredient("Frenfries", 2)
        ]),
    new Recipe("Recipe 2",
      "test description 2",
      'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
      [
        new Ingredient("Buns",2),
        new Ingredient("Meat", 2)

      ]
    )
  ]
  getRecipes(){
    return this.recipes.slice();   // Get a copy of recipes array
  }
  AddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
