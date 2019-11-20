import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/seller/register/register.component';
import { LoginComponent } from './components/seller/login/login.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path :'seller',
    children:[
      {
        path:'category',
        children:[
          
        ]
      },
      {
        path:'product',
        children:[

        ]
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
