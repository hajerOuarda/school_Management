package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.ClasseDTO;
import com.esprim.stageback.models.Class;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface ClassMapper extends GenericMapper<Class, ClasseDTO> {
    @Override
    @Mapping(target = "id", ignore = false)
    Class asEntity(ClasseDTO dto);
}