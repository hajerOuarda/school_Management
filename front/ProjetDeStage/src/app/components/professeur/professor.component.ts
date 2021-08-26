import {Component, OnInit} from '@angular/core';
import {Professor} from "../../models/professor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-professeur',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  user: Professor = new Professor();
  formProfesseur!: FormGroup;

  constructor(private readonly userService: UserService) {
    this.initForm()
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.formProfesseur = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      cin: new FormControl(this.user.cin, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      matiereEnseigne: new FormControl(this.user.matiereEnseigne, Validators.required),
      titreProf: new FormControl(this.user.titreProf, Validators.required),
      CV: new FormControl(this.user.cv, Validators.required),
      salaire: new FormControl(this.user.salaire, Validators.required)

    })

    this.formProfesseur.valueChanges.subscribe(value => {
      this.user.firstName = value.firstName;
      this.user.lastName = value.lastName;
      this.user.phone = value.phone;
      this.user.email = value.email;
      this.user.cin = value.cin;
      this.user.matiereEnseigne = value.matiereEnseigne;
      this.user.titreProf = value.titreProf;
      this.user.cv = value.CV;
      this.user.salaire = value.salaire;

    })
  }

  saveProfessor() {
    console.log(this.user);
    this.userService.addUser("professor", this.user).subscribe(values => console.log(values))
  }
}
