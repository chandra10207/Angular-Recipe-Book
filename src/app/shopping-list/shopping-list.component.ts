import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import ShoppingListService from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (newingredients: Ingredient[]) => {
        this.ingredients = newingredients
      }
    )
  }


}
