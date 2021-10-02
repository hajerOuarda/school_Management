import {Component, OnInit} from '@angular/core';
import {Subject} from "../../models/subject";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SubjectService} from "../../services/subject.service";
import {ActivatedRoute} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject: Subject = new Subject();
  formSubject ?: FormGroup
  subjectId: number = 0;
  isReady: boolean = false;

  constructor(private subjectService: SubjectService,
              readonly activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.subjectService.findOne(this.subjectId)
          .pipe(
            finalize(() => {
              this.initFormSubject();
              this.isReady = true;
            })
          )
          .subscribe((subject: any) => {
              this.subject = subject;
              this.subjectId = param.id
            },
            error => console.log(error));
      } else {
        this.initFormSubject();
        this.isReady = true;
      }
    })
  }

  ngOnInit(): void {
    this.initFormSubject()
  }

  initFormSubject() {
    this.formSubject = new FormGroup({
        name: new FormControl(this.subject.name, Validators.required)
      }
    )
    this.formSubject.valueChanges.subscribe((value: any) =>
      this.subject.name = value.name
    )
  }

  saveSubject() {
    this.subjectService.addOne(this.subject)
      .subscribe(data => console.log(data), error => console.log(error))
  }

}
