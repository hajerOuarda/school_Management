import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./components/etudiant/student.component";
import {ProfessorComponent} from "./components/professeur/professor.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path : 'etudiant' ,component: StudentComponent} ,
  {path : 'etudiant/:id' ,component: StudentComponent} ,
  {path : 'professeur' , component: ProfessorComponent},
  {path : 'professeur/:id' , component: ProfessorComponent},
  {path : 'home' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
