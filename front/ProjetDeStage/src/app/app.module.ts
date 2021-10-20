import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditStudentComponent} from './modules/school/components/edit-student/edit-student.component';
import {EditProfessorComponent} from './modules/school/components/edit-professor/edit-professor.component';
import {UserService} from "./modules/school/services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {EditSubjectComponent} from './modules/school/components/edit-subject/edit-subject.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {LayoutModule} from "./modules/layout/layout.module";
import {AuthGuard} from "./core/guard/auth.guard";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FeahterIconModule} from "./core/feather-icon/feather-icon.module";
import {FullCalendarModule} from "@fullcalendar/angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EditStudentComponent,
    EditProfessorComponent,
    EditSubjectComponent,
    ErrorPageComponent,
    DashboardComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        LayoutModule,
        FeahterIconModule,
        FullCalendarModule,
    ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
