import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 20),
    new Ingredient("tomato",22)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  OnIngredientAdded(ingredirent : Ingredient){
    this.ingredients.push(ingredirent);


  }

}
