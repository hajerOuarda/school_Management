import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../models/student";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends UserComponent{

  user: Student = new Student();


  constructor( readonly userService: UserService,
               readonly activatedRoute: ActivatedRoute) {
    super(userService,activatedRoute)
  }

  ngOnInit(): void {
  }

    initForm() {
      super.initForm()
       this.formUser.addControl('cne' ,new FormControl(this.user.cne, Validators.required))
      this.formUser.addControl('address',new FormControl(this.user.address,Validators.required))
      this.formUser.addControl('bacYear',new FormControl(this.user.bacYear,Validators.required))
      this.formUser.addControl('careerOption',new FormControl(this.user.careerOption))
      this.formUser.addControl('desiredCareer',new FormControl(this.user.desiredCareer,Validators.required))
      this.formUser.addControl('sex',new FormControl(this.user.sex))
    }

  protected  handleValueChanges(value: any) {
    super.handleValueChanges(value);
      this.formUser.valueChanges.subscribe(value =>
      {
        this.user.cne=value.cne
        this.user.address=value.address
        this.user.bacYear=value.bacYear
        this.user.careerOption=value.careerOption
        this.user.desiredCareer=value.desiredCareer
        this.user.sex=value.sex

      })
  }

  saveStudent() {
    this.saveUser('student')

  }
}
