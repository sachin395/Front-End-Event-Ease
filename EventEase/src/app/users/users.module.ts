import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ClarityModule } from "@clr/angular";




@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    HeaderComponent,
    LandingPageComponent,
    SignupComponent

  

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    
   
  ]
})
export class UsersModule { }
