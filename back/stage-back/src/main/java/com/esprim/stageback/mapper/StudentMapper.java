package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.ProfessorDto;
import com.esprim.stageback.dto.StudentDto;
import com.esprim.stageback.models.Professor;
import com.esprim.stageback.models.Student;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface StudentMapper extends GenericMapper<Student, StudentDto> {
}