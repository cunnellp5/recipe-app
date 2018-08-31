import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
import { RecipeComponentComponent } from './components/recipe-component/recipe-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodPicturesComponent } from './components/food-pictures/food-pictures.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogComponent,
    RecipeComponentComponent,
    HeaderComponent,
    FooterComponent,
    FoodPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
