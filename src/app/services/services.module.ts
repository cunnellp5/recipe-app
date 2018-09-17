import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  AngularFirestore
} from 'angularfire2/firestore';
import { RecipeService } from './recipe.service';

@NgModule({})

export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        RecipeService,
        AngularFirestore
      ]
    }
  }
}
