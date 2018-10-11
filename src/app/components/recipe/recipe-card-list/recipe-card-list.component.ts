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
  @Input() recipes: any;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  ray: any[];
  id: any;

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this._recipeService.getRecipes().subscribe((res) => {
      // let newRay = res.map(el => {
      //   el.data.id = el.id
      //   return el.data
      // })
      this.ray = res;
    })

  }

  createOne() {
    this._recipeService.createRecipe();
  }
  updateItem(event) {
    this._recipeService.updateRecipe(event);
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  deleteItem(event) {
    this._recipeService.deleteOne(event);
  }

}
