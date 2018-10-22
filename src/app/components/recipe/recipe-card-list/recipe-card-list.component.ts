import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css']
})

export class RecipeCardListComponent implements OnInit {
  // @Input() recipes: any;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: any[];
  id: any;

  constructor(
    private _recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this._recipeService.getRecipes().subscribe((res) => {
      this.recipes = res;
    });
  }
  updateItem(recipe) {
    this._recipeService.updateIngredientsList(recipe);
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  deleteItem(id) {
    this._recipeService.deleteOne(id);
  }
  editItem(id) {
    this.router.navigate([`/recipes/${id}/edit`]);
  }

  // dateConverter(date) {
  //   var newDate = new Date(date.seconds);
  //   return newDate
  // }

}
