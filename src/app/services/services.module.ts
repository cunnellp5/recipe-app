import { NgModule, ModuleWithProviders } from '@angular/core';
import { RecipeService } from './recipe.service';

@NgModule({})

export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [ // put other services in this array
        RecipeService
      ]
    }
  }
}
