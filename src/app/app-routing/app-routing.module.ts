import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from '../components/blog/blog.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { FoodPicturesComponent } from '../components/food-pictures/food-pictures.component';
import { RecipeComponent } from '../components/recipe/recipe.component';
import { RecipeDetailViewComponent } from '../components/recipe/recipe-detail-view/recipe-detail-view.component';

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "blog", component: BlogComponent },
  { path: "pictures", component: FoodPicturesComponent },
  { path: "recipes", component: RecipeComponent },
  { path: "recipes/:title", component: RecipeDetailViewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
