import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.css']
})

export class CreateNewRecipeComponent implements OnInit {
  selectedFile: File;
  recipeForm: any;
  title: string;
  long: string;
  notes: string;
  instructions: string;
  list: string[];
  @ViewChild('ingredientList') input;

  constructor(
    private _recipeService: RecipeService,
    private _fb: FormBuilder,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeForm = this._fb.group({
      formTitle: [''],
      formPicture: [''],
      formShortDescription: [''],
      formLongDescription: [''],
      formNotes: [''],
      formInstructions: [''],
      formIngredientList: this._fb.array([ this.createIngredientList() ])
    });
  }

  createIngredientList() {
    return this._fb.group({ list: '' });
  }

  addInputList(event) {
    const list = this.createIngredientList();
    this.inputList.push(list);
  }

  get inputList(): FormArray {
    return this.recipeForm.get('formIngredientList') as FormArray;
  }

  onFormSubmit() {
    let recipe = this.mapperFunction(this.recipeForm.value)
    this._recipeService.createRecipe(recipe)
    this.router.navigate(['/recipes']);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  mapperFunction(obj) {
    let newObj: any = {};
     newObj.date = new Date();
     newObj.title = obj.formTitle;
     newObj.imagePath = obj.formPicture;
     newObj.short = obj.formShortDescription;
     newObj.description = obj.formLongDescription;
     newObj.personalNotes = obj.formNotes;
     newObj.instructions = obj.formInstructions;
     newObj.ingredientsList = obj.formIngredientList;
    return newObj;
  }
}
