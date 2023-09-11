import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'Home', component: UsersComponent },
{
  path:'',component:LandingPageComponent
},
{ path: 'Login', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { 
  constructor() { }

 
}

