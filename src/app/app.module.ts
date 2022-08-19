import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './admin/login/interceptor/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    }),

  ],
  providers: [
    {provide: 'apiUrl', useValue:'https://localhost:7146/api/'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
