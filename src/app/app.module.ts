import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RecipeModule } from './components/recipe/recipe.module';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
// import { RecipeComponent } from './components/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodPicturesComponent } from './components/food-pictures/food-pictures.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogComponent,
    // RecipeComponent,
    HeaderComponent,
    FooterComponent,
    FoodPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
