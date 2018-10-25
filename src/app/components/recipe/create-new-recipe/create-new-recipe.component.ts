import { Component, OnInit, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.css']
})

export class CreateNewRecipeComponent implements OnInit, AfterViewInit {
  @Input() editRecipe: any;
  recipeForm: any;
  list: string[];
  selectedFile: any;
  editable: any;
  @ViewChild('ingredientList') input;

  constructor(
    private _recipeService: RecipeService,
    private _fb: FormBuilder,
    private elementRef: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editable = this.editRecipe;
    if (this.editable) {
      this.initializeEditMode(this.editRecipe);
    } else {
      this.initializeCreateMode();
    }
  }

  ngAfterViewInit() {
    console.log(this.editRecipe, 'RECIPE');
  }

  initializeCreateMode() {
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

  initializeEditMode(recipe) {
    this.recipeForm = this._fb.group({
      formTitle: [recipe.title],
      formPicture: [recipe.imagePath],
      formShortDescription: [recipe.short],
      formLongDescription: [recipe.description],
      formNotes: [recipe.personalNotes],
      formInstructions: [recipe.instructions],
      formIngredientList: this._fb.array([ this.createEditIngredientList() ])
    });
  }

  createEditIngredientList() {
    const listRay = this.editRecipe.ingredientsList;
    return this._fb.group({ list: listRay[0] });
  }

  createIngredientList() {
    return this._fb.group({ list: '' });
  }

  addInputList() {
    const list = this.createIngredientList();
    this.inputList.push(list);
  }

  get inputList(): FormArray {
    return this.recipeForm.get('formIngredientList') as FormArray;
  }

  deleteItem(index) {
    this.inputList.removeAt(index);
  }

  onFormSubmit() {
    if (!this.editRecipe) {
      const recipe = this.mapperFunction(this.recipeForm.value);
      this._recipeService.createRecipe(recipe);
      this.router.navigate(['/recipes']);
    } else {
      const recipe = this.mapperFunction(this.recipeForm.value);
      const id = this.route.snapshot.paramMap.get('id');
      this._recipeService.updateRecipe(id, recipe);
      this.router.navigate(['/recipes']);
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  mapperFunction(obj): any {
    const newObj: any = {};
     newObj.date = new Date();
     newObj.title = obj.formTitle;
     newObj.imagePath = obj.formPicture;
     newObj.short = obj.formShortDescription;
     newObj.description = obj.formLongDescription;
     newObj.personalNotes = obj.formNotes;
     newObj.instructions = obj.formInstructions;
     newObj.ingredientsList = obj.formIngredientList.map((el) => el.list);
    return newObj;
  }
}
