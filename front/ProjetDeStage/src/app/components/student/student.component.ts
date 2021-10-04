import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Student} from "../../models/student";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {UserComponent} from "../user/user.component";
import {Class} from "../../modules/school/models/class";
import {ClassService} from "../../modules/school/services/class.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends UserComponent<Student> {

  myClasses: Array<Class> = [];

  initUser(): void {
    this.user = new Student();
  }

  constructor(readonly userService: UserService,
              readonly classService: ClassService,
              readonly activatedRoute: ActivatedRoute) {
    super(userService, activatedRoute)
    this.initForm();
  }

  initForm() {
    super.initForm()
    this.classService.findAll()
      .subscribe((data: any) => {
        this.myClasses = data;
      })
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
    this.saveUser('student')

  }


}
