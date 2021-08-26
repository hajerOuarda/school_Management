import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Student} from "../../models/student";
import {JsonpClientBackend} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User> = [];

  constructor(private router: Router, private readonly userService: UserService) {
    this.homeForm();
  }

  ngOnInit(): void {
  }

  private homeForm() {
    this.userService.showAllUSer()
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

  addUser() {
    let student = new Student();
    student.lastName = "fghfhf";
    this.users.push(student);
  }

  navigateToStudent() {
    this.router.navigate(['etudiant'])
  }

  navigateToProfessor() {
    this.router.navigate(['professeur'])
  }

  updateUser(id: number, userType: string = 'student') {
    let routeLink = 'etudiant';
    if(userType == 'prof') {
      routeLink = 'professeur';
    }
    this.router.navigate([routeLink, id])
  }
}
