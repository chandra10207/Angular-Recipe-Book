import {Ingredient} from "../shared/Ingredient.model";
import {EventEmitter} from "@angular/core";

export default class ShoppingListService{

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 20),
    new Ingredient("tomato",22)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  AddIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.getIngredients())
    // console.log(this.ingredients)
  }

}
