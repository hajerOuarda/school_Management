package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.ClassDTO;
import com.esprim.stageback.models.Class;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface ClassMapper extends GenericMapper<Class, ClassDTO> {
    @Override
    @Mapping(target = "id", ignore = false)
    @Mapping(target = "subjects", ignore = true)
    Class asEntity(ClassDTO dto);
}