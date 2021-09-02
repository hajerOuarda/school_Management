import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class UserComponent {

  user: User = new class extends User {};
  formUser!: FormGroup;
  userId: number = 0

  protected constructor(readonly userService: UserService,
                        readonly activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.userId = param.id
        this.userService.findOne(this.userId).subscribe((user: any) =>
            this.user = user,
          error => console.log(error),
          () =>
            this.initForm());
      }
    })
    this.initForm()
  }

  public initForm() {
    this.formUser = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
    })

    this.formUser.valueChanges.subscribe((value: any) => {
      this.handleValueChanges(value);
    })
  }

  protected handleValueChanges(value: any) {
    this.user.firstName = value.firstName;
    this.user.lastName = value.lastName;
    this.user.phone = value.phone;
    this.user.email = value.email;
  }

  saveUser(type: string) {
    console.log(this.user);
    let callBack;
    //add section
      if (type == 'student') {
        callBack = this.userService.addUser("student", this.user)
      } else {
        callBack = this.userService.addUser("professor", this.user)
      }
    //update section
      if (this.userId)
        callBack = this.userService.updateUser(this.user, this.userId);

      callBack.subscribe(res => console.log(res));
  }
}
