package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.ProfessorDto;
import com.esprim.stageback.dto.UserDTO;
import com.esprim.stageback.models.Professor;
import com.esprim.stageback.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface ProfessorMapper extends GenericMapper<Professor, ProfessorDto> {
}