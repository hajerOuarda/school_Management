package com.esprim.stageback.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class ClassDTO extends AbstractDTO<Long> {
    private String filliers;
    private String niveauEtude;

    private List<SubjectDTO> subjects = new ArrayList<>();
    private List<StudentDto> students = new ArrayList<>();
    private List<ProfessorDto> professors = new ArrayList<>();

}