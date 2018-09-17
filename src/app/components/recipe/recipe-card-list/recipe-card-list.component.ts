import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css']
})

export class RecipeCardListComponent implements OnInit {
  @Input() recipes: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  deleteItem(event) {
    console.log(event)
    console.log(this._recipeService.deleteOne(event))
  }

}
