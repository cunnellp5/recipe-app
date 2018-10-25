import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../components/recipe/recipe.model';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {
  recipes: any;
  addMe: any;
  recipeRef: any;
  id: string;
  recipe: any;

  constructor(private db: AngularFirestore) {
    this.recipeRef = this.db.collection('recipeDetails');
  }

  getRecipes(): any {
    this.recipes = this.db.collection('recipeDetails')
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          data.id = id;
          return data;
        });
      })
    );
    return this.recipes;
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.recipeRef.doc(id).valueChanges();
  }

  updateRecipe(id, recipe): void {
    this.recipeRef.doc(id).update(recipe).then(() => {
          console.log('Document successfully update!');
      })
      .catch((error) => {
          console.error('Error updating doc: ', error);
      });
  }

  updateIngredientsList(recipe): void {
    if (!recipe) { return; }
    const ingredientsList = {ingredientsList: ['sugar', 'veal', 'poop']};
    this.recipeRef.doc(recipe).update(ingredientsList).then(() => {
        console.log('Document successfully updated ingredient list!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  createRecipe(recipe): void {
    // this.addMe = {
      // title: 'test2',
      // short: 'test',
      // description: 'test',
      // date: 'test',
      // imagePath: 'test',
    // };
    this.recipeRef.add(recipe);
  }

  deleteOne(recipe) {
    this.recipeRef.doc(recipe).delete().then(() => {
          console.log('Document successfully deleted');
      })
      .catch((error) => {
          console.error('Error deleting document: ', error);
      });
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

  // private handleError(error) {
  //   console.log(error);
  // }

}
