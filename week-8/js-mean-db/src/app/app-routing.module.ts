import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComposerListComponent} from './composer-list/composer-list.component';
import {ComposerDetailComponent} from './composer-detail/composer-detail.component';
import {ComposerCreateComponent} from './composer-create/composer-create.component';

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composers/:id',
    component: ComposerDetailComponent
  },
  {
    path: 'composers',
    component: ComposerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
