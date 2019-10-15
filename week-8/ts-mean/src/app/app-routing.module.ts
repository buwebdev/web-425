import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComposerListComponent} from "./composer-list/composer-list.component";
import {ComposerDetailComponent} from "./composer-detail/composer-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer/:id',
    component: ComposerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
