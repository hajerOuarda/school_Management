import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Student} from "../../models/student";
import {Router} from "@angular/router";
import {ModalDirective} from "angular-bootstrap-md";
import {ClassService} from "../../modules/school/services/class.service";
import {Class} from "../../modules/school/models/class";
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User> = [];
  subjects: Array<Subject> = [];
  classes: Array<Class> = [];

  selectedUser?: number;

  @ViewChild("deleteModal")
  deleteModal?: ModalDirective;



  constructor(private router: Router, private readonly userService: UserService,
              private readonly subjectService: SubjectService,
              private readonly classService: ClassService) {
    this.homeForm();
  }

  ngOnInit(): void {
  }

  public homeForm() {
    this.userService.findAll()
      .subscribe((data: any) => {
          this.users = data;
        }
      );
    this.subjectService.findAll()
      .subscribe((data: any) => {
        this.subjects = data
      });
    this.classService.findAll()
      .subscribe((data: any) => {
        this.classes = data
      })


  }

// <----- returns liste of users  section ----- >
  get students(): Array<any> {
    return this.users.filter(el => el.userType == "Student");
  }

  get professors(): Array<any> {
    return this.users.filter(el => el.userType == "Prof");
  }

  get myClasses(): Array<any> {
    return this.classes.filter(el => el);
  }
  get mySubjects(): Array<any> {
    return this.subjects.filter(el => el);
  }

// <-----End  returns liste of users  section ----- >

// <----- navigations section ----- >
  navigateToUserType(userType: string) {
    let myLink = 'student'
    if (userType == "professor")
      myLink = 'professor'
    this.router.navigate([myLink])
  }

  navigateToClass() {
    this.router.navigate(['class'])

  }

  navigateToSubject() {
    this.router.navigate(['subject'])
  }

// <----- End navigations section ----- >

// <----- Update section ----- >
  updateUser(id: number, userType: string = 'student') {
    let routeLink = 'student';
    if (userType == 'professor') {
      routeLink = 'professor';
    }
    this.router.navigate([routeLink, id])
  }

  updateClass(id:number){
    this.router.navigate(['class',id]);

  }

// <-----End  Update section ----- >

  deleteOneUser(id: number) {
    this.selectedUser = id;
    this.deleteModal?.show();
  }


// <----- Delete section ----- >
  handleDeleteOneUser() {
    if (!this.selectedUser)
      return;
    this.userService.deleteOne(this.selectedUser).subscribe(result => {
      this.homeForm();
      console.log('maybe here', result);
    }, error => console.error('or here', error), () => {
      this.deleteModal?.hide();
      delete this.selectedUser;
    })
  }

  // handleDeleteOneSubject(){
  //   if(!this.selectedSubject)
  //     return ;
  //   return this.subjectService.deleteSubject(this.selectedSubject).subscribe(res=> {
  //       this.homeForm();
  //       console.log(res)
  //     });
  // }
  deleteOneSubject(id: number) {
    return this.subjectService.deleteOne(id).subscribe(res => {
      this.homeForm();
    });
  }

  deleteClass(id: number) {
    return this.classService.deleteOne(id).subscribe(value => {
      this.homeForm();
    });

  }


// <----- End Delete section ----- >

  sayHi() {
  }


}
