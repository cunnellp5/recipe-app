import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit {
  // @Input() recipes: any;
  id: string;
  recipe: any;
  list: string[];
  obj: any;

  constructor(
    private _recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.obj = {title: 'poo'}
    this.getRecipe();
  }
  updateItem(recipe) {
    // this._recipeService.updateIngredientsList(recipe);
  }

  getRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id)
    return this._recipeService.getRecipe(id)
      .subscribe(recipe => {
        if(recipe) {
          this.recipe = recipe;
        }
      });
  }


}
