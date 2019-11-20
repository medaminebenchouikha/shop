import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/seller/register/register.component';
import { LoginComponent } from './components/seller/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { CategoriesListComponent } from './components/seller/category/categories-list/categories-list.component';
import { CategoriesAddComponent } from './components/seller/category/categories-add/categories-add.component';
import { CategoryEditComponent } from './components/seller/category/category-edit/category-edit.component';
import { ProductsListComponent } from './components/seller/product/products-list/products-list.component';
import { ProductAddComponent } from './components/seller/product/product-add/product-add.component';
import { ProductEditComponent } from './components/seller/product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    Page404Component,
    CategoriesListComponent,
    CategoriesAddComponent,
    CategoryEditComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
