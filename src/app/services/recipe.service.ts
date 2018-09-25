import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../components/recipe/recipe.model';

@Injectable()
export class RecipeService {
  recipes: any;
  addMe: Recipe;
  recipeRef: any;
  id: string;

  constructor(private db: AngularFirestore) {
    this.recipeRef = this.db.collection('recipeDetails');
  }

  getRecipes(): any {
    this.recipes = this.db.collection("recipeDetails")
    .snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          data.id = id;
          return data;
        })
      })
    )
    return this.recipes;
  }

  // createRecipe(): void {
  //   this.addMe = {
  //     title: 'test2',
  //     short: 'test',
  //     description: 'test',
  //     date: 'test',
  //     imagePath: 'test',
  //   }
  //   this.recipeRef.add(this.addMe);
  // }

  deleteOne(recipe) {
    this.recipeRef.doc(recipe).delete().then(() => {
          console.log("Document successfully deleted!");
      })
      .catch(function(error) {
          console.error("Error removing document: ", error);
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

  private handleError(error) {
    console.log(error);
  }

}
