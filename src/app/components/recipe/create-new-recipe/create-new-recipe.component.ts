import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  Validators,
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
      formIngredientList: ['']
      // formIngredientList: this._fb.array([
      //   console.log(this.initIngredientList())
      //   this.initIngredientList()
      // ])
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onFormSubmit() {
    let form = this.recipeForm;
    console.log('formTitle: ' + form.get('formTitle').value);
    console.log('formShortDescription: ' + form.get('formShortDescription').value);
    console.log('formLongDescription: ' + form.get('formLongDescription').value);
    console.log('formNotes: ' + form.get('formNotes').value);
    console.log('formInstructions: ' + form.get('formInstructions').value);
    console.log('formIngredientList ' + form.get('formIngredientList').value);
  }

  // initIngredientList() {
  //   return this._fb.group({ list: [''] });
  // }
  //
  addInputList(event) {
    console.log(this.input.nativeElement.value)
    // const div = document.createElement('div');
    // const input = document.createElement('input');

    // let newField = div.appendChild(input);


    // const control = <FormArray>this.recipeForm.controls['formIngredientList'];
    // console.log(control)
    // control.push(this.initIngredientList());
  }

}
