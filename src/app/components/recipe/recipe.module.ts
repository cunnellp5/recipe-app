import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from './recipe.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import { RecipeDetailViewComponent } from './recipe-detail-view/recipe-detail-view.component';
import { RecipeItemComponent } from './recipe-card-list/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    // RecipeComponent
  ],
  exports: [
    // RecipeComponent
  ],
  declarations: [
    RecipeComponent,
    RecipeCardListComponent,
    RecipeDetailViewComponent,
    RecipeItemComponent
  ]
})
export class RecipeModule { }
