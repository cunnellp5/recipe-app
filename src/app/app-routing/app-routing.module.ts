import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from '../components/blog/blog.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { FoodPicturesComponent } from '../components/food-pictures/food-pictures.component';
import { RecipeComponentComponent } from '../components/recipe-component/recipe-component.component';

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "blog", component: BlogComponent },
  { path: "pictures", component: FoodPicturesComponent },
  { path: "recipes", component: RecipeComponentComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
