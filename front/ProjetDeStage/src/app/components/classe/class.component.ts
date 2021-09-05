import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Classe} from "../../models/classe";
import {ClassService} from "../../services/class.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class: Classe = new Classe();
  formClass?: FormGroup

  constructor(private readonly classService: ClassService) {

  }

  ngOnInit(): void {
    this.initFormClass();
  }

  public initFormClass() {
    this.formClass = new FormGroup({
      filliers: new FormControl(this.class.filliers, Validators.required),
      niveauEtude: new FormControl(this.class.niveauEtude, Validators.required),
    })

    this.formClass.valueChanges.subscribe((value: any) => {
      this.class.filliers = value.filliers;
      this.class.niveauEtude = value.niveauEtude;
    })
  }

  saveClass() {
    this.classService.addClass(this.class)
      .subscribe(data => console.log(data))
  }


}
