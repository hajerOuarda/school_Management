package com.esprim.stageback.service.impl;

import com.esprim.stageback.dao.ClasseRepository;
import com.esprim.stageback.dto.ClasseDTO;
import com.esprim.stageback.mapper.ClassMapper;
import com.esprim.stageback.mapper.GenericMapper;
import com.esprim.stageback.models.Class;
import com.esprim.stageback.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassServiceImpl implements ClassService {
    private final ClasseRepository repository;

    @Autowired
    private ClassMapper classMapper;

    public ClassServiceImpl(ClasseRepository repository) {
        this.repository = repository;
    }

    @Override
    public GenericMapper<Class, ClasseDTO> getMapper() {
        return classMapper;
    }

    @Override
    public Class save(ClasseDTO entity) {
        Class aClass = getMapper().asEntity(entity);
        aClass = repository.save(aClass);
        return aClass;
    }

    @Override
    public List<Class> save(List<Class> entities) {
        return (List<Class>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Class> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Class> findAll() {
        return (List<Class>) repository.findAll();
    }

    @Override
    public Page<Class> findAll(Pageable pageable) {
        Page<Class> entityPage = repository.findAll(pageable);
        List<Class> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public Class update(ClasseDTO dto, Long id) {
        Optional<Class> optional = findById(id);
        if (optional.isPresent()) {
            return save(dto);
        }
        return null;
    }

}