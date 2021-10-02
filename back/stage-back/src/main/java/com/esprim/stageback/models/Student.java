package com.esprim.stageback.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToOne()
    Class myClasse ;


    public String getCne() {
        return cne;
    }

    public void setCne(String cne) {
        this.cne = cne;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getAnneeBac() {
        return anneeBac;
    }

    public void setAnneeBac(String anneeBac) {
        this.anneeBac = anneeBac;
    }

    public String getParcoursDesiree() {
        return parcoursDesiree;
    }

    public void setParcoursDesiree(String parcoursDesiree) {
        this.parcoursDesiree = parcoursDesiree;
    }

    public String getOptionParcours() {
        return optionParcours;
    }

    public void setOptionParcours(String optionParcours) {
        this.optionParcours = optionParcours;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public Class getMyClasse() {
        return myClasse;
    }

    public void setMyClasse(Class myClasse) {
        this.myClasse = myClasse;
    }
}
