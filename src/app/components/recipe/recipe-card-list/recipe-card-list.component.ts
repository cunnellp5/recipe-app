import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css']
})
export class RecipeCardListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Short Ribs',
      'Savory',
      'deliciousness from alabama and tweaked with my own flaav',
      'january 2rd',
      'https://bulma.io/images/placeholders/96x96.png',
      1
    ),
    new Recipe(
      'Butter',
      'good',
      'deliciousness from alabama and tweaked with my own flaav',
      'january 2rd',
      'https://bulma.io/images/placeholders/96x96.png',
      2
    )
  ];

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
