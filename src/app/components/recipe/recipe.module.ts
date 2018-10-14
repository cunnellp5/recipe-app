import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from './recipe.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import { RecipeDetailViewComponent } from './recipe-detail-view/recipe-detail-view.component';
import { CreateNewRecipeComponent } from './create-new-recipe/create-new-recipe.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
