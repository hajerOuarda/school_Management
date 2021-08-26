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
import {StudentComponent} from './components/etudiant/student.component';
import {ProfessorComponent} from './components/professeur/professor.component';
import {UserService} from "./services/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentComponent,
    ProfessorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
