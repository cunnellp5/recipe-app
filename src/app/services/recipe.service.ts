import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Recipe } from '../components/recipe/recipe.model';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class RecipeService {
  recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(
    private afs: AngularFirestore
  ) {}

  getRecipes() {
    this.recipeCollection = this.afs.collection('recipeDetails', ref => {
      console.log(ref, 'REF')
      return ref
    });
    this.recipes = this.recipeCollection.valueChanges();
  }

  // getRecipesList(): AngularFireList<Recipe> {
  //   return this.recipeRef;
  // }

  private handleError(error) {
    console.log(error);
  }
  //
  // createCustomer(customer: Customer): void {
  //   this.customersRef.push(customer);
  // }
  //
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
