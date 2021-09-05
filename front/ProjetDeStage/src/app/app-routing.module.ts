import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./components/student/student.component";
import {ProfessorComponent} from "./components/professor/professor.component";
import {HomeComponent} from "./components/home/home.component";
import {ClassComponent} from "./components/classe/class.component";

const routes: Routes = [
  {path : 'student' ,component: StudentComponent} ,
  {path : 'student/:id' ,component: StudentComponent} ,
  {path : 'professor' , component: ProfessorComponent},
  {path : 'professor/:id' , component: ProfessorComponent},
  {path : 'home' , component: HomeComponent},
  {path: 'class' , component:ClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
