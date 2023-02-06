import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SginupComponent } from './sginup/sginup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'sign-in', component: SigninComponent},
  {path: 'sign-up', component: SginupComponent},
  {path: 'home', component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

