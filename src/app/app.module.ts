import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserregComponent } from './userreg/userreg.component';
import { UserLoginComponent } from './user-login/user-login.component';

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
  }

]



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserregComponent,
    UserLoginComponent
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
