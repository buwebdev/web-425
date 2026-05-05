import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DailySpecialsComponent } from './daily-specials/daily-specials.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order',
    component: OrderComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'daily-specials',
    component: DailySpecialsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
