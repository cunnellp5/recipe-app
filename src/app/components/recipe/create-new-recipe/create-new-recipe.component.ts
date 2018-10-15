import {
  Component,
  OnInit
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.css']
})

export class CreateNewRecipeComponent implements OnInit {
  selectedFile: File;
  recipeForm: any;

  constructor(
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeForm = new FormGroup({
      formTitle: new FormControl(),
      formPicture: new FormControl(),
      formShortDescription: new FormControl(),
      formLongDescription: new FormControl(),
      formNotes: new FormControl(),
      formInstructions: new FormControl()
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onFormSubmit() {
    console.log('formTitle: ' + this.recipeForm.get('formTitle').value);
    console.log('formShortDescription: ' + this.recipeForm.get('formShortDescription').value);
    console.log('formLongDescription: ' + this.recipeForm.get('formLongDescription').value);
    console.log('formNotes: ' + this.recipeForm.get('formNotes').value);
    console.log('formInstructions: ' + this.recipeForm.get('formInstructions').value);
  }

}
