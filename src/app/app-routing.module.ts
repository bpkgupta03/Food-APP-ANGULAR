import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestroItemsComponent } from './pages/restro-items/restro-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes:Routes = [
  { 
    path: '',
    component: CategoriesComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path:'foodCategory',
    component:CategoriesComponent
  },
  {
    path:'restro-items',
    component:RestroItemsComponent
  },
  {
    path:'create-order',
    component:CreateOrderComponent
  },
  {
    path:'foodCategory',
    component:CategoriesComponent
  },
  {
    path:'restroItems/:foodID',
    component:RestroItemsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
