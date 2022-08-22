import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LayoutsModule } from './layouts/layouts.module';
import { LoginModule } from './login/login.module';
import { UrlsModule } from './urls/urls.module';
import { SignupModule } from './signup/signup.module';





@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HomeModule,
    LayoutsModule,
    //LoginModule,
    UrlsModule,
    SignupModule


  ],
  exports: [
    HomeModule,
    LayoutsModule,
    //LoginModule,
    UrlsModule,
    SignupModule

  ]
})
export class AdminModule { }
