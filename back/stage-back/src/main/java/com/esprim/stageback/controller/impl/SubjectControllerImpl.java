package com.esprim.stageback.controller.impl;

import com.esprim.stageback.controller.SubjectController;
import com.esprim.stageback.dto.SubjectDTO;
import com.esprim.stageback.mapper.SubjectMapper;
import com.esprim.stageback.models.Subject;
import com.esprim.stageback.service.SubjectService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RequestMapping("/subject")
@RestController
public class SubjectControllerImpl implements SubjectController {
    private final SubjectService subjectService;


    private final SubjectMapper subjectMapper;

    public SubjectControllerImpl(SubjectService subjectService, SubjectMapper subjectMapper) {
        this.subjectService = subjectService;
        this.subjectMapper = subjectMapper;
    }

    @Override
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SubjectDTO save(@RequestBody SubjectDTO subjectDTO) {

         return subjectMapper.asDTO(subjectService.save(subjectDTO));
    }

    @Override
    @GetMapping("/{id}")
    public SubjectDTO findById(@PathVariable("id") Long id) {
        Subject subject = subjectService.findById(id).orElse(null);
        return subjectMapper.asDTO(subject);
    }

    @Override
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        subjectService.deleteById(id);
    }

    @Override
    @GetMapping
    public List<SubjectDTO> list() {

        return subjectMapper.asDTOList(subjectService.findAll());
    }

    @Override
    @GetMapping("/page-query")
    public Page<SubjectDTO> pageQuery(Pageable pageable) {
        Page<Subject> subjectPage = subjectService.findAll(pageable);
        List<SubjectDTO> dtoList = subjectPage
                .stream()
                .map(subjectMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, subjectPage.getTotalElements());
    }

    @Override
    @PutMapping("/{id}")
    public SubjectDTO update(@RequestBody SubjectDTO subjectDTO, @PathVariable("id") Long id) {
        Subject subject = subjectMapper.asEntity(subjectDTO);
        return subjectMapper.asDTO(subjectService.update(subjectDTO, id));
    }
}