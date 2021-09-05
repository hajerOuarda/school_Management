package com.esprim.stageback.controller;

import com.esprim.stageback.dto.ClasseDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Api(tags = "Class API")
public interface ClassController {
    @ApiOperation("Add new data")
    public ClasseDTO save(@RequestBody ClasseDTO classe);

    @ApiOperation("Find by Id")
    public ClasseDTO findById(@PathVariable("id") Long id);

    @ApiOperation("Delete based on primary key")
    public void delete(@PathVariable("id") Long id);

    @ApiOperation("Find all data")
    public List<ClasseDTO> list();

    @ApiOperation("Pagination request")
    public Page<ClasseDTO> pageQuery(Pageable pageable);

    @ApiOperation("Update one data")
    public ClasseDTO update(@RequestBody ClasseDTO dto, @PathVariable("id") Long id);
}