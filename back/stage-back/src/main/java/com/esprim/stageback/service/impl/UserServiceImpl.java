package com.esprim.stageback.service.impl;

import com.esprim.stageback.dao.UserRepository;
import com.esprim.stageback.dto.ProfessorDto;
import com.esprim.stageback.dto.StudentDto;
import com.esprim.stageback.dto.UserDTO;
import com.esprim.stageback.mapper.GenericMapper;
import com.esprim.stageback.mapper.ProfessorMapper;
import com.esprim.stageback.mapper.StudentMapper;
import com.esprim.stageback.mapper.UserMapper;
import com.esprim.stageback.models.User;
import com.esprim.stageback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserRepository repository;
    private final UserMapper userMapper;

    @Autowired
    private ProfessorMapper professorMapper;

    @Autowired
    private StudentMapper studentMapper;

    public UserServiceImpl(UserRepository repository, UserMapper userMapper) {
        this.repository = repository;
        this.userMapper = userMapper;
    }

    @Override
    public GenericMapper<User, UserDTO> getMapper() {
        return userMapper;
    }

    @Override
    public User save(UserDTO dto) {
        User entity;
        if(dto instanceof ProfessorDto)
            entity = professorMapper.asEntity((ProfessorDto) dto);
        else if (dto instanceof StudentDto)
            entity = studentMapper.asEntity((StudentDto) dto);
        else
            entity = getMapper().asEntity(dto);

        return repository.save(entity);
    }

    @Override
    public List<User> save(List<User> entities) {
        return (List<User>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    public Page<User> findAll(Pageable pageable) {
        Page<User> entityPage = repository.findAll(pageable);
        List<User> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public User update(UserDTO entity, Long id) {
        Optional<User> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }

    @Override
    public User save(User entity, UserDTO dto) {
        return null;
    }
}