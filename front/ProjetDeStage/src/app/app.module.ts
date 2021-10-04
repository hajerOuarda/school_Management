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
import {StudentComponent} from './components/student/student.component';
import {ProfessorComponent} from './components/professor/professor.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {SubjectComponent} from './components/subject/subject.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {LayoutModule} from "./modules/layout/layout.module";
import {AuthGuard} from "./core/guard/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentComponent,
    ProfessorComponent,
    SubjectComponent,
    ErrorPageComponent,
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
