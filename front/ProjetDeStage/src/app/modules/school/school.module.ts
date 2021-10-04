import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassComponent} from "./components/class/class.component";
import {EditClassComponent} from "./components/edit-class/edit-class.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditClassComponent,
    ClassComponent,
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
