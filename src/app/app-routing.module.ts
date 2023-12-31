import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {LoginComponent} from './components/login/login.component'

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent},
  { path: 'products', component: ProductComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
