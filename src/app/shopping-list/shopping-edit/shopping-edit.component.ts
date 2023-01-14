import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import ShoppingListService from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  AddNewIngredient(){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng =  new Ingredient(ingName,ingAmount);
    // this.IngredientAdded.emit(newIng);
    this.shoppingListService.AddIngredient(newIng);
  }

}
