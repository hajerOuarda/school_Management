import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Student} from "../../models/student";
import {Router} from "@angular/router";
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User> = [];
  selectedUser?: number;
  @ViewChild("deleteModal")
  deleteModal?: ModalDirective;

  constructor(private router: Router, private readonly userService: UserService) {
    this.homeForm();
  }

  ngOnInit(): void {
  }

  private homeForm() {
    this.userService.showAllUsers()
      .subscribe((data: any) => {
          this.users = data;
        }
      );

  }

  get students(): Array<any> {
    return this.users.filter(el => el.userType == "Student");
  }

  get professors(): Array<any> {
    return this.users.filter(el => el.userType == "Prof");
  }

  // addUser() {
  //   let student = new Student();
  //   student.lastName = "fghfhf";
  //   this.users.push(student);
  // }

  navigateToUserType(userType: string) {
    let myLink = 'student'
    if (userType == "professor")
      myLink = 'professor'
    this.router.navigate([myLink])
  }

  // navigateToProfessor() {
  //   this.router.navigate(['professor'])
  // }

  updateUser(id: number, userType: string = 'student') {
    let routeLink = 'student';
    if (userType == 'professor') {
      routeLink = 'professor';
    }
    this.router.navigate([routeLink, id])

  }

  deleteOneUser(id: number) {
    this.selectedUser = id;
    this.deleteModal?.show();
  }


  handleDeleteOneUser() {
    if (!this.selectedUser)
      return;
    this.userService.deleteUser(this.selectedUser).subscribe(result => {
      this.homeForm();
      console.log('maybe here', result);
    }, error => console.error('or here', error), () => {
      this.deleteModal?.hide();
      delete this.selectedUser;
    })
  }
}
