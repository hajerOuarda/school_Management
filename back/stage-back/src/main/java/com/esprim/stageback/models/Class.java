package com.esprim.stageback.models;


import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Class implements AbstractEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String filliers;
    private String niveauEtude;

    @OneToMany
    @ToString.Exclude
    List<Student> students = new ArrayList<>();

    @ManyToMany
    @ToString.Exclude
    private List<Professor> professors = new ArrayList<Professor>();

    @ManyToMany(cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Subject> subjects = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Class aClass = (Class) o;

        return Objects.equals(id, aClass.id);
    }

    @Override
    public int hashCode() {
        return 515306299;
    }
}
