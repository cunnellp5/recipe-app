import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from '../components/blog/blog.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "blog", component: BlogComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
