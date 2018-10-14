import {
  Component,
  OnInit
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.css']
})

export class CreateNewRecipeComponent implements OnInit {

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    // noop
  }

}
