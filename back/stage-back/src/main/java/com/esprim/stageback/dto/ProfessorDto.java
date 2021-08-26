package com.esprim.stageback.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ProfessorDto extends UserDTO {
    private String cin;
    private String matiereEnseigne;
    private String titreProf;
    private String cv;
    private String salaire;
}
