import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    public user: UserService
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipes.subscribe((data) => console.log(data))
  }

}
