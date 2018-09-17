import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs';
import { Recipe } from '../components/recipe/recipe.model';

@Injectable()
export class RecipeService {
  recipes: any;
  addMe: Recipe;
  recipeRef: any;

  constructor(private db: AngularFirestore) {
    this.recipes = this.db.collection('recipeDetails').valueChanges()
    this.recipeRef = this.db.collection('recipeDetails');
  }

  getRecipes(): any {
    this.recipes.subscribe((res) => {
      console.log(res)
      res.forEach((doc, i) => {
          console.log(`${doc.id} => ${doc.title}`);
      });
    });
    return this.recipes;
  }

  // createRecipe(): void {
  //   this.addMe = {
  //     title: 'test2',
  //     short: 'test',
  //     description: 'test',
  //     date: 'test',
  //     imagePath: 'test',
  //     id: 3
  //   }
  //   this.recipeRef.add(this.addMe);
  // }

  deleteOne(a) {

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

  private handleError(error) {
    console.log(error);
  }

}
