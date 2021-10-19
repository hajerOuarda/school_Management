import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Router} from "@angular/router";
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  constructor(private readonly subjectService:SubjectService ,
              private  router:Router) { }

  ngOnInit(): void {
    this.subjectService.findAll()
      .subscribe(data=>this.rows=data)
  }

  onDelete(row: any) {
    this.subjectService.deleteOne(row.id)
      .subscribe(data=> console.log(data));
    this.router.navigate(['subject']);

  }

  onUpdate(row: any) {
    this.router.navigate(['subject', row.id])
  }
}
