import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ColumnMode} from '@swimlane/ngx-datatable';
import {Student} from "../../models/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student> = [];
  loadingIndicator = true;
  ColumnMode = ColumnMode;

  constructor(private readonly studentService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.findAll()
      .subscribe((data: any) => {
        this.students = data.filter((el: any) => "Student" == el.userType);
      })
  }


  onDelete(row: any) {
    this.studentService.deleteOne(row.id)
      .subscribe(data => console.log(data));
    this.router.navigate(['student']);
  }

  onUpdate(row: any) {
    this.router.navigate(['student', row.id])
  }


}
