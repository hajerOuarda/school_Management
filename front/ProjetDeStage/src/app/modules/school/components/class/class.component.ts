import {Component, OnInit} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ClassService} from "../../services/class.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  constructor(private readonly classService: ClassService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.classService.findAll()
      .subscribe(_data => this.rows = _data);
  }

  onDelete(row: any) {
    console.log(row);
  }

  onUpdate(row: any) {
    this.router.navigate(['/class', row.id])
  }
}
