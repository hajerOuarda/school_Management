import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from "./components/student/student.component";
import {ProfessorComponent} from "./components/professor/professor.component";
import {HomeComponent} from "./components/home/home.component";
import {EditClassComponent} from "./modules/school/components/edit-class/edit-class.component";
import {SubjectComponent} from "./components/subject/subject.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {BaseComponent} from "./modules/layout/base/base.component";
import {ClassComponent} from "./modules/school/components/class/class.component";

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'class', component: ClassComponent},
      {path: 'class/:id', component: EditClassComponent},
      {path: 'class/create', component: EditClassComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'subject/:id', component: SubjectComponent},
      {path: 'subject/create', component: SubjectComponent},
    ]
  },
  {path: 'student', component: StudentComponent},
  {path: 'student/:id', component: StudentComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'professor/:id', component: ProfessorComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  {path: '**', redirectTo: 'error', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
