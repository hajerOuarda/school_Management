package com.esprim.stageback.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;

@JsonIgnoreProperties(ignoreUnknown = true)
@EqualsAndHashCode(callSuper = true)
@Data
public class UserDTO extends AbstractDTO<Long> {
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String userType;

}