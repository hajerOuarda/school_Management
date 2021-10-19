import {Component} from '@angular/core';
import {Professor} from "../../../../models/professor";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserComponent} from "../../../../components/user/user.component";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-professeur',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css']
})
export class EditProfessorComponent extends UserComponent<Professor> {
  professorId: number = 0;
  isReady: boolean = false;


  initUser(): void {
    this.user = new Professor();
  }

  constructor(readonly userService: UserService,
              readonly professorService: UserService,
              readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
    super(userService, activatedRoute);

    this.initForm();

    this.professorId = (parseInt(<string>activatedRoute.snapshot.paramMap.get("id")) || 0);
    if (this.professorId) {
      this.professorService.findOne(this.professorId)
        .pipe(
          finalize(() => {
            this.isReady = true;
            this.initForm();
          })
        )
        .subscribe((_data: any) => this.user = _data);
    } else {
      this.isReady = true;
      this.initForm();
    }
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
    if (this.professorId) {
      this.professorService.update(this.user, this.professorId)
        .subscribe(_data => console.debug(_data));
    } else {
      this.saveUser('professor');

    }
    this.router.navigate(['professor']);
  }

}
