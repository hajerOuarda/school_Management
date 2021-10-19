import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Student} from "../../models/student";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserComponent} from "../../../../components/user/user.component";
import {Class} from "../../models/class";
import {ClassService} from "../../services/class.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent extends UserComponent<Student> {

  myClasses: Array<Class> = [];
  studentId: number = 0;
  isReady: boolean = false;

  initUser(): void {
    this.user = new Student();
  }

  constructor(readonly userService: UserService,
              readonly studentService: UserService,
              readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
    super(userService, activatedRoute)
    this.initForm();
    this.studentId = (parseInt(<string>activatedRoute.snapshot.paramMap.get("id")) || 0);
    if (this.studentId) {
      this.studentService.findOne(this.studentId)
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
    super.initForm()
    this.formUser.addControl('cne', new FormControl(this.user.cne, Validators.required))
    this.formUser.addControl('address', new FormControl(this.user.address, Validators.required))
    this.formUser.addControl('bacYear', new FormControl(this.user.bacYear, Validators.required))
    this.formUser.addControl('careerOption', new FormControl(this.user.careerOption))
    this.formUser.addControl('desiredCareer', new FormControl(this.user.desiredCareer, Validators.required))
    this.formUser.addControl('sex', new FormControl(this.user.sex))
  }

  protected handleValueChanges(value: any) {
    super.handleValueChanges(value);
    if (this.isReady) {
      this.user.cne = value.cne
      this.user.address = value.address
      this.user.bacYear = value.bacYear
      this.user.careerOption = value.careerOption
      this.user.desiredCareer = value.desiredCareer
      this.user.sex = value.sex
    }
  }

  saveStudent() {
      if (this.studentId) {
        this.studentService.update(this.user, this.studentId)
          .subscribe(_data => console.debug(_data));
      } else {
        this.saveUser('student');

      }
      this.router.navigate(['student']);
    }



}
