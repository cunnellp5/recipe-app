import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
