package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.SubjectDTO;
import com.esprim.stageback.models.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface SubjectMapper extends GenericMapper<Subject, SubjectDTO> {
    @Override
    @Mapping(target = "id", ignore = false)
    Subject asEntity(SubjectDTO dto);
}