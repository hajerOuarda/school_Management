import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../models/student";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  user: Student = new Student();
  formStudent?: FormGroup;
  userId: number = 0;


  constructor(private readonly userService: UserService,
              private readonly routerSnap: ActivatedRoute) {
    routerSnap.params.subscribe(params => {
      delete this.formStudent;
      if (params.id) { // routerSnap.params.id != 0 && routerSnap.params.id != null && routerSnap.params.id != undefined
        this.userId = params.id;
        this.userService.findOne(this.userId)
          .subscribe((user: any) => {
              this.user = user;
            }, error => {
              console.error(error);
            },
            () => {
              this.initForm();
            });
      }
    })
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.user.firstName = "student1";
    this.formStudent = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      cne: new FormControl(this.user.cne, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      address: new FormControl(this.user.adresse, Validators.required),
      bacYear: new FormControl(this.user.anneeBac, Validators.required),
      careerOption: new FormControl(this.user.optionParcours, Validators.required),
      desiredCareer: new FormControl(this.user.parcoursDesiree, Validators.required),
      sex: new FormControl(this.user.sexe)
    })

    this.formStudent.valueChanges.subscribe(value => {
      this.user.firstName = value.firstName;
      this.user.lastName = value.lastName;
      this.user.phone = value.phone;
      this.user.cne = value.cne;
      this.user.email = value.email;
      this.user.adresse = value.address;
      this.user.anneeBac = value.bacYear;
      this.user.optionParcours = value.careerOption;
      this.user.parcoursDesiree = value.desiredCareer;
      this.user.sexe = value.sex;
    })
  }

  saveStudent() {
    console.log(this.user);
    let callBack = this.userService.addUser("student", this.user);
    if(this.userId)
      callBack = this.userService.updateUser(this.user, this.userId);

    callBack.subscribe(res => console.log(res));

  }
}
