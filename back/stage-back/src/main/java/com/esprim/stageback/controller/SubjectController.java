package com.esprim.stageback.controller;

import com.esprim.stageback.dto.SubjectDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Api(tags = "Subject API")
public interface SubjectController {
    @ApiOperation("Add new data")
    public SubjectDTO save(@RequestBody SubjectDTO subject);

    @ApiOperation("Find by Id")
    public SubjectDTO findById(@PathVariable("id") Long id);

    @ApiOperation("Delete based on primary key")
    public void delete(@PathVariable("id") Long id);

    @ApiOperation("Find all data")
    public List<SubjectDTO> list();

    @ApiOperation("Pagination request")
    public Page<SubjectDTO> pageQuery(Pageable pageable);

    @ApiOperation("Update one data")
    public SubjectDTO update(@RequestBody SubjectDTO dto, @PathVariable("id") Long id);
}