import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlsComponent } from './urls.component';
import { RouterModule, Routes } from '@angular/router';
import { UrlPipe } from './pipes/url.pipe';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2"
const route: Routes = [
  {
    path:"",
    component: UrlsComponent
  }
]

@NgModule({
  declarations: [
    UrlsComponent,
    UrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SweetAlert2Module.forRoot()
  ],
  exports: [
    UrlsComponent
  ]
})
export class UrlsModule { }
