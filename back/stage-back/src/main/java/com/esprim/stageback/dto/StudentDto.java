package com.esprim.stageback.dto;


import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class StudentDto extends UserDTO {
    private String cne;
    private String adresse;
    private String anneeBac;
    private String parcoursDesiree;
    private String optionParcours;
    private String sexe;
}
