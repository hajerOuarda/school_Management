import {Component} from '@angular/core';
import {Professor} from "../../models/professor";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-professeur',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent extends UserComponent<Professor> {
  initUser(): void {
    this.user = new Professor();
  }

  constructor(readonly userService: UserService,
              readonly activatedRoute: ActivatedRoute) {
    super(userService, activatedRoute);
  }

  initForm() {
    super.initForm();
    this.formUser.addControl("cin", new FormControl(this.user.cin, Validators.required))
    this.formUser.addControl("matiereEnseigne", new FormControl(this.user.matiereEnseigne, Validators.required))
    this.formUser.addControl("titreProf", new FormControl(this.user.titreProf, Validators.required))
    this.formUser.addControl("CV", new FormControl(this.user.cv, Validators.required))
    this.formUser.addControl("salaire", new FormControl(this.user.salaire, Validators.required))
  }

  protected handleValueChanges(value: any) {
    super.handleValueChanges(value);
    if (this.isReady) {
      this.user.cin = value.cin;
      this.user.matiereEnseigne = value.matiereEnseigne;
      this.user.titreProf = value.titreProf;
      this.user.cv = value.CV;
      this.user.salaire = value.salaire;
    }
  }

  saveProfessor() {
    this.saveUser("professor")
  }
}
