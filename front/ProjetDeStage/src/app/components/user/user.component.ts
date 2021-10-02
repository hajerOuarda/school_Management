import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {finalize} from "rxjs/operators";

@Injectable()
export abstract class UserComponent<U extends User> {

  user!: U;
  formUser!: FormGroup;
  userId: number = 0
  isReady: boolean = false;

  protected constructor(readonly userService: UserService,
                        readonly activatedRoute: ActivatedRoute) {
    this.initUser();
    activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.userId = param.id;
        this.userService.findOne(this.userId)
          .pipe(
            finalize(() => {
              this.initForm();
              this.isReady = true;
            })
          )
          .subscribe((user: any) => {
              this.user = user;
              this.userId = param.id
            },
            error => console.log(error));
      } else {
        this.initForm();
        this.isReady = true;
      }
    })
  }

  abstract initUser(): void;

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
      callBack = this.userService.addOne("student", this.user)
    } else {
      callBack = this.userService.addOne("professor", this.user)
    }
    //update section
    if (this.userId)
      callBack = this.userService.update(this.user, this.userId);

    callBack.subscribe(res => console.log(res));
  }
}
