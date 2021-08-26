package com.esprim.stageback.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
@DiscriminatorValue("Student")
public class Student extends User {
    private String cne;
    private String adresse;
    private String anneeBac;
    private String parcoursDesiree;
    private String optionParcours;
    private String sexe;


}
