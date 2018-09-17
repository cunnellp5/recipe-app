import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs';
import { Recipe } from '../components/recipe/recipe.model';

@Injectable()
export class RecipeService implements OnInit {
  recipes: any;
  addMe: Recipe;
  recipeRef: any;

  constructor(
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.recipeRef = this.db.collection('recipeDetails');
    this.recipes = this.db.collection('recipeDetails').valueChanges();
  }

  getRecipes(): any {
    this.recipes.subscribe((res) => console.log(res));
    return this.recipes;
  }

  createRecipe(): void {
    this.addMe = {
      title: 'test',
      short: 'test',
      description: 'test',
      date: 'test',
      imagePath: 'test',
      id: 2
    }
    this.recipeRef.add(this.addMe);
  }

  private handleError(error) {
    console.log(error);
  }
  // updateCustomer(key: string, value: any): void {
  //   this.customersRef.update(key, value).catch(error => this.handleError(error));
  // }
  //
  // deleteCustomer(key: string): void {
  //   this.customersRef.remove(key).catch(error => this.handleError(error));
  // }
  //

  //
  // deleteAll(): void {
  //   this.customersRef.remove().catch(error => this.handleError(error));
  // }
  //

}
