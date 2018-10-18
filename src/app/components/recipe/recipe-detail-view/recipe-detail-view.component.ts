import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})

export class RecipeDetailViewComponent implements OnInit {
  @Input() recipe: Recipe;
  list: any[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const route = this.route.snapshot.paramMap.get('id');
    if (route === 'new') {
      this.recipe = {
        title: 'New',
        short: 'This is for the dashboard view',
        description: 'Long description of what we\'re about to cook',
        date: 'today',
        imagePath: 'https://via.placeholder.com/128x128',
        id: 'yea',
        ingredientsList: ['1', '2', '3'],
        personalNotes: 'some personal notes on this shit',
        instructions: 'How to cook the whole fucking thing'
      };
    } else {
      this.getRecipe();
    }
  }

  getRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.list = this.recipe.ingredientsList;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
