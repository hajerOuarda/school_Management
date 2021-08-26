package com.esprim.stageback.controller.impl;

import com.esprim.stageback.controller.UserController;
import com.esprim.stageback.dto.ProfessorDto;
import com.esprim.stageback.dto.StudentDto;
import com.esprim.stageback.dto.UserDTO;
import com.esprim.stageback.mapper.ProfessorMapper;
import com.esprim.stageback.mapper.StudentMapper;
import com.esprim.stageback.mapper.UserMapper;
import com.esprim.stageback.models.Professor;
import com.esprim.stageback.models.Student;
import com.esprim.stageback.models.User;
import com.esprim.stageback.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
@RestController
public class UserControllerImpl implements UserController {
    private final UserService userService;
    private final UserMapper userMapper;
    @Autowired
    private ProfessorMapper professorMapper;
    @Autowired
    private StudentMapper studentMapper;

    public UserControllerImpl(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @Override
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO save(@RequestBody UserDTO userDTO) {
        return proceedUser(userService.save(userDTO));
    }

    @Override
    @PostMapping("/{type}")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO save(@PathVariable String type, @RequestBody Map userDTO) {
        UserDTO dto;
        ObjectMapper mapper = new ObjectMapper();
        if ("professor".equals(type))
            dto = mapper.convertValue(userDTO, ProfessorDto.class);
        else if ("student".equals(type))
            dto = mapper.convertValue(userDTO, StudentDto.class);
        else
            dto = mapper.convertValue(userDTO, UserDTO.class);
        return userMapper.asDTO(userService.save(dto));
    }

    @Override
    @GetMapping("/{id}")
    public UserDTO findById(@PathVariable("id") Long id) {
        User user = userService.findById(id).orElse(null);
        return proceedUser(user);
    }

    @Override
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        userService.deleteById(id);
    }

    @Override
    @GetMapping
    public List<? super UserDTO> list() {
        List<User> users = userService.findAll();
        List<? super UserDTO> dtos = new ArrayList<>();
        for (User user : users) {
            dtos.add(proceedUser(user));
        }

        return dtos;
    }

    @Override
    @GetMapping("/page-query")
    public Page<UserDTO> pageQuery(Pageable pageable) {
        Page<User> userPage = userService.findAll(pageable);
        List<UserDTO> dtoList = userPage
                .stream()
                .map(this::proceedUser).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, userPage.getTotalElements());
    }

    @Override
    @PutMapping("/{id}")
    public UserDTO update(@RequestBody UserDTO userDTO, @PathVariable("id") Long id) {
        return proceedUser(userService.update(userDTO, id));
    }

    private UserDTO proceedUser(User user) {
        UserDTO dto;
        if (user instanceof Professor)
            dto = professorMapper.asDTO((Professor) user);
        else if (user instanceof Student)
            dto = studentMapper.asDTO((Student) user);
        else dto = userMapper.asDTO(user);

        return dto;
    }
}