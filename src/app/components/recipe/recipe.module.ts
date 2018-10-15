import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from './recipe.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import { RecipeDetailViewComponent } from './recipe-detail-view/recipe-detail-view.component';
import { CreateNewRecipeComponent } from './create-new-recipe/create-new-recipe.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  ],
  declarations: [
    RecipeComponent,
    RecipeCardListComponent,
    RecipeDetailViewComponent,
    CreateNewRecipeComponent
  ]
})
export class RecipeModule { }
