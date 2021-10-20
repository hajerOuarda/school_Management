import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditStudentComponent} from "./modules/school/components/edit-student/edit-student.component";
import {EditProfessorComponent} from "./modules/school/components/edit-professor/edit-professor.component";
import {HomeComponent} from "./components/home/home.component";
import {EditClassComponent} from "./modules/school/components/edit-class/edit-class.component";
import {EditSubjectComponent} from "./modules/school/components/edit-subject/edit-subject.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {BaseComponent} from "./modules/layout/base/base.component";
import {ClassComponent} from "./modules/school/components/class/class.component";
import {SubjectComponent} from "./modules/school/components/subject/subject.component";
import {StudentComponent} from "./modules/school/components/student/student.component";
import {ProfessorComponent} from "./modules/school/components/professor/professor.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},

      {path: 'class', component: ClassComponent},
      {path: 'class/create', component: EditClassComponent},
      {path: 'class/:id', component: EditClassComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'subject/create', component: EditSubjectComponent},
      {path: 'subject/:id', component: EditSubjectComponent},

      {path: 'student', component: StudentComponent},
      {path: 'student/create', component: EditStudentComponent},
      {path: 'student/:id', component: EditStudentComponent},
      {path: 'professor', component: ProfessorComponent},
      {path: 'professor/create', component: EditProfessorComponent},
      {path: 'professor/:id', component: EditProfessorComponent},

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
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
