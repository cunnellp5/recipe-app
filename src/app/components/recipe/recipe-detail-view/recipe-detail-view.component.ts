import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
