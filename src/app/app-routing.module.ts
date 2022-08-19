import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin/guard/auth.guard';
import { HomeComponent } from './admin/home/home.component';
import { LayoutsComponent } from './admin/layouts/layouts.component';
import { LoginComponent } from './admin/login/login.component';
import { UrlsComponent } from './admin/urls/urls.component';

const routes: Routes = [

  {
    path:"",
    pathMatch: "full",
    component: LoginComponent
  },
  {
    path: 'admin-login',
    component:LoginComponent,
    loadChildren: ()=> import('./admin/login/login.module').then(m=>m.LoginModule)
  },

  {
    path: 'admin',
    component:LayoutsComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component:HomeComponent,
        loadChildren: ()=>import('./admin/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'urls',
        component:UrlsComponent,
        loadChildren: ()=>import('./admin/urls/urls.module').then(m=>m.UrlsModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
