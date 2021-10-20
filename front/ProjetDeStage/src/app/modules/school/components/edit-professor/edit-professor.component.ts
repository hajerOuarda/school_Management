import {Component} from '@angular/core';
import {Professor} from "../../models/professor";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserComponent} from "../../../../components/user/user.component";
import {finalize} from "rxjs/operators";
import {ClassService} from "../../services/class.service";
import {Class} from "../../models/class";

@Component({
  selector: 'app-professeur',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css']
})
export class EditProfessorComponent extends UserComponent<Professor> {
  professorId: number = 0;
  isReady: boolean = false;
  classes: any = [];
  initFormDef = false;

  initUser(): void {
    this.user = new Professor();
  }

  constructor(readonly userService: UserService,
              readonly professorService: UserService,
              readonly classService: ClassService,
              readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
    super(userService, activatedRoute);
    this.professorId = (parseInt(<string>activatedRoute.snapshot.paramMap.get("id")) || 0);
    if (this.professorId) {
      this.professorService.findOne(this.professorId)
        .pipe(
          finalize(() => {
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
    this.isReady = false;
    this.classService.findAll()
      .pipe(
        finalize(() => {
          super.initForm();
          this.formUser.addControl("cin", new FormControl(this.user.cin, Validators.required));
          this.formUser.addControl("matiereEnseigne", new FormControl(this.user.matiereEnseigne, Validators.required));
          this.formUser.addControl("titreProf", new FormControl(this.user.titreProf, Validators.required));
          this.formUser.addControl("CV", new FormControl(this.user.cv, Validators.required));
          this.formUser.addControl("salaire", new FormControl(this.user.salaire, Validators.required));
          this.formUser.addControl("classes",
            new FormControl(this.user.classes, Validators.required)
          );

          this.isReady = true;
        })
      )
      .subscribe(_data => {
        this.classes = _data;
      });
  }

  protected handleValueChanges(value: any) {
    super.handleValueChanges(value);
    if (this.isReady) {
      this.user.cin = value.cin;
      this.user.matiereEnseigne = value.matiereEnseigne;
      this.user.titreProf = value.titreProf;
      this.user.cv = value.CV;
      this.user.salaire = value.salaire;
      if (value.classes)
        this.user.classes = value.classes;
    }
  }

  saveProfessor() {
    if (this.professorId) {
      this.professorService.update(this.user, this.professorId, "professor")
        .subscribe(_data => console.debug(_data));
    } else {
      this.saveUser('professor');

    }
    this.router.navigate(['professor']);
  }

  /**
   * @deprecated
   * @param c as class
   */
  hasClass(c: any): boolean {
    if (this.user && this.user.classes)
      return this.user.classes.find((_cl: { id: any; }) => _cl.id == c.id) != undefined;
    return false;
  }

  compareClass(c1: any, c2: any): boolean {
    return c1 && c2 && c1.id == c2.id;
  }
}
