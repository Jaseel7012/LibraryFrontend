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
import { IssueComponent } from './issue/issue.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    path:'delete',
    component:BookDeleteComponent
  },
  {
    path:'view',
    component:ViewBooksComponent
  },{
    path:'issue',
    component:IssueComponent
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
    ViewBooksComponent,
    IssueComponent,
    NavbarUserComponent,
    NavbarComponent
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
