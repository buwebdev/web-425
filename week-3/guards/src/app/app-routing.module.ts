import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import { LoginGuard } from "./login.guard";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductDetailComponent, canActivate:[LoginGuard], canDeactivate: [UnsavedChangesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
