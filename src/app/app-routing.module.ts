import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


const routes: Routes = [
  { path:"harshit", component: HeaderComponent},
 {
   path:"form",
   component:FormComponent
 },
 {
   path: "child1", component: Child1Component
 },
 {
   path: "child2" , component:Child2Component
 },
 {
   path:"",
   redirectTo:"/child22",
   pathMatch: 'full'
 },
 { path: '**', component: Child1Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
