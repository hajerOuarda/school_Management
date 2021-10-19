import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {Student} from "../../models/student";
import {ColumnMode} from '@swimlane/ngx-datatable';
import {Professor} from "../../../../models/professor";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professors: Array<Professor> = []
  loadingIndicator = true;
  ColumnMode = ColumnMode;

  constructor(private readonly professorService: UserService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.professorService.findAll()
      .subscribe(data => {
        this.professors = data.filter((el: { userType: string; }) => "Prof" == el.userType)
      })

  }


  onDelete(row: any) {
    this.professorService.deleteOne(row.id)
      .subscribe(data => console.log(data));
    this.router.navigate(['professor']);
  }

  onUpdate(row: any) {
    this.router.navigate(['professor', row.id])
  }


}
