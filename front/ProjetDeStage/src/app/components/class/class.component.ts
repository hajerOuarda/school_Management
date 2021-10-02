import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../models/class";
import {ClassService} from "../../services/class.service";
import {SubjectService} from "../../services/subject.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class: Class = new Class();
  formClass?: FormGroup;
  classId: number = 0;
  subjects: any = [];
  isReady: boolean = false;

  constructor(private readonly classService: ClassService,
              private readonly subjectService: SubjectService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
    this.classId = (parseInt(<string>activatedRoute.snapshot.paramMap.get("id")) || 0);
    if (this.classId) {
      this.classService.findOne(this.classId)
        .pipe(
          finalize(() => {
            this.isReady = true;
            this.initFormClass();
          })
        )
        .subscribe((_data: any) => this.class = _data);
    } else {
      this.isReady = true;
      this.initFormClass();
    }
  }

  ngOnInit(): void {
    this.subjectService.findAll().subscribe(_data => this.subjects = _data);

  }

  public initFormClass() {
    this.formClass = new FormGroup({
      filliers: new FormControl(this.class.filliers, Validators.required),
      niveauEtude: new FormControl(this.class.niveauEtude, Validators.required),
      subjects: new FormControl(this.class.subjects, Validators.required),
    })

    this.formClass.valueChanges.subscribe((value: any) => {
      this.class.filliers = value.filliers;
      this.class.niveauEtude = value.niveauEtude;
      this.class.subjects = value.subjects;
    })
  }

  saveClass() {

    if (this.classId) {
      this.classService.update(this.class, this.classId)
        .subscribe(_data => console.debug(_data));
    } else {
      this.classService.addOne(this.class)
        .subscribe(data => console.log(data))
    }
    this.router.navigate(['home']);
  }

}
