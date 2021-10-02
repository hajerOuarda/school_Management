package com.esprim.stageback.service.impl;

import com.esprim.stageback.dao.SubjectRepository;
import com.esprim.stageback.dto.SubjectDTO;
import com.esprim.stageback.mapper.GenericMapper;
import com.esprim.stageback.mapper.SubjectMapper;
import com.esprim.stageback.models.Subject;
import com.esprim.stageback.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class SubjectServiceImpl
        extends GenericServiceImpl<SubjectDTO, Subject, Long>
        implements SubjectService {
    private final SubjectRepository repository;

    @Autowired
    private SubjectMapper subjectMapper;

    public SubjectServiceImpl(SubjectRepository repository) {
        this.repository = repository;
    }

    @Override
    public GenericMapper<Subject, SubjectDTO> getMapper() {
        return subjectMapper;
    }

    @Override
    public Subject save(Subject entity, SubjectDTO dto) {
        return null;
    }

    @Override
    JpaRepository<Subject, Long> getRepository() {
        return this.repository;
    }
}