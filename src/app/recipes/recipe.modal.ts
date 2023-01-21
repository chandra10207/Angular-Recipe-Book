import {Ingredient} from "../shared/Ingredient.model";

export class Recipe{
    // public id: BigInteger;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

constructor(name:string, desc:string, image:string, ingredients: Ingredient[]){
    // this.id =
    this.name = name;
    this.description = desc;
    this.imagePath = image;
    this.ingredients = ingredients;
}

}
