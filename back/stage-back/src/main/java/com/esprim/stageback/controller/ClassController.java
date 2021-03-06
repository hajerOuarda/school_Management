package com.esprim.stageback.controller;

import com.esprim.stageback.dto.ClassDTO;
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
    public ClassDTO save(@RequestBody ClassDTO classe);

    @ApiOperation("Find by Id")
    public ClassDTO findById(@PathVariable("id") Long id);

    @ApiOperation("Delete based on primary key")
    public void delete(@PathVariable("id") Long id);

    @ApiOperation("Find all data")
    public List<ClassDTO> list();

    @ApiOperation("Pagination request")
    public Page<ClassDTO> pageQuery(Pageable pageable);

    @ApiOperation("Update one data")
    public ClassDTO update(@RequestBody ClassDTO dto, @PathVariable("id") Long id);
}