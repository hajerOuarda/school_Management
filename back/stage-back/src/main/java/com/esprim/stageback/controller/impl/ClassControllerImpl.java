package com.esprim.stageback.controller.impl;

import com.esprim.stageback.controller.ClassController;
import com.esprim.stageback.dto.ClasseDTO;
import com.esprim.stageback.mapper.ClassMapper;
import com.esprim.stageback.models.Class;
import com.esprim.stageback.service.ClassService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RequestMapping("/class")
@RestController
public class ClassControllerImpl implements ClassController {
    private final ClassService classService;

    private final ClassMapper classMapper;

    public ClassControllerImpl(ClassService classService, ClassMapper classMapper) {
        this.classService = classService;
        this.classMapper = classMapper;
    }

    @Override
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClasseDTO save(@RequestBody ClasseDTO classeDTO) {

        return classMapper.asDTO(classService.save(classeDTO));
    }

    @Override
    @GetMapping("/{id}")
    public ClasseDTO findById(@PathVariable("id") Long id) {
        Class aClass = classService.findById(id).orElse(null);
        return classMapper.asDTO(aClass);
    }

    @Override
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        classService.deleteById(id);
    }

    @Override
    @GetMapping
    public List<ClasseDTO> list() {

        return classMapper.asDTOList(classService.findAll());
    }

    @Override
    @GetMapping("/page-query")
    public Page<ClasseDTO> pageQuery(Pageable pageable) {
        Page<Class> classePage = classService.findAll(pageable);
        List<ClasseDTO> dtoList = classePage
                .stream()
                .map(classMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, classePage.getTotalElements());
    }

    @Override
    @PutMapping("/{id}")
    public ClasseDTO update(@RequestBody ClasseDTO classeDTO, @PathVariable("id") Long id) {
        Class aClass = classMapper.asEntity(classeDTO);
        return classMapper.asDTO(classService.update(classeDTO, id));
    }
}