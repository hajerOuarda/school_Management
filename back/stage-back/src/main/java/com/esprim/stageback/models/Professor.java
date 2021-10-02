package com.esprim.stageback.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@DiscriminatorValue("Prof")
public class Professor extends User {
    private String cin;
    private String matiereEnseigne;
    private String titreProf;
    private String cv;
    private String salaire;

    @ManyToMany
    private List<Class> classes = new ArrayList<Class>();
}
