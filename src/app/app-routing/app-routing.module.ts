import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from '../components/blog/blog.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { FoodPicturesComponent } from '../components/food-pictures/food-pictures.component';
import { RecipeComponent } from '../components/recipe/recipe.component';
import { RecipeDetailViewComponent } from '../components/recipe/recipe-detail-view/recipe-detail-view.component';
import { CreateNewRecipeComponent } from '../components/recipe/create-new-recipe/create-new-recipe.component';
import { EditRecipeComponent } from '../components/recipe/edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pictures', component: FoodPicturesComponent },
  { path: 'recipes', component: RecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailViewComponent },
  { path: 'recipes/:id/edit', component: EditRecipeComponent },
  { path: 'create', component: CreateNewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
