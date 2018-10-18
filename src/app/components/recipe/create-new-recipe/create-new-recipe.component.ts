import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder
} from '@angular/forms';
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
    private elementRef: ElementRef
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
    console.log(this.recipeForm.get('formIngredientList').controls);
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
    console.log(this.recipeForm.value);
    // const form = this.recipeForm;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
