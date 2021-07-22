import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://prestigesmartchef.com/media/images/content/Shami_kebab.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Schnitzel',
      imageUrl: 'https://prestigesmartchef.com/media/images/content/Shami_kebab.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];


  constructor() { }


  getAllRecipes(){
    return [...this.recipes]; //COPIA DELL'ARRAY
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }
}
