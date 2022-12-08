import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserregComponent } from './userreg/userreg.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { ViewBooksComponent } from './view-books/view-books.component';

const myroute:Routes=[
  {
    path:'',
    component:AdminComponent
  },{
    path:'reg',
    component:UserregComponent
  },
  {
    path:'log',
    component:UserLoginComponent
  },{
    path:'add',
    component:BookAddComponent
  },{
    path:'search',
    component:BookSearchComponent
  },
  {
    path:'del',
    component:BookDeleteComponent
  },
  {
    path:'view',
    component:ViewBooksComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserregComponent,
    UserLoginComponent,
    BookAddComponent,
    BookSearchComponent,
    BookDeleteComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
