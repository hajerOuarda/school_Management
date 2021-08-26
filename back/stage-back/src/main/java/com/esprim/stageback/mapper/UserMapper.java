package com.esprim.stageback.mapper;

import com.esprim.stageback.dto.UserDTO;
import com.esprim.stageback.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface UserMapper extends GenericMapper<User, UserDTO> {
}