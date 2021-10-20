import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassComponent} from "./components/class/class.component";
import {EditClassComponent} from "./components/edit-class/edit-class.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { SubjectComponent } from './components/subject/subject.component';
import { StudentComponent } from './components/student/student.component';
import { ProfessorComponent } from './components/professor/professor.component';


@NgModule({
  declarations: [
    EditClassComponent,
    ClassComponent,
    SubjectComponent,
    StudentComponent,
    ProfessorComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SchoolModule {
}
