import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from './recipe.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import { RecipeDetailViewComponent } from './recipe-detail-view/recipe-detail-view.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    // RecipeComponent
  ],
  exports: [
    // RecipeComponent
  ],
  declarations: [
    RecipeComponent,
    RecipeCardListComponent,
    RecipeDetailViewComponent,
  ]
})
export class RecipeModule { }
