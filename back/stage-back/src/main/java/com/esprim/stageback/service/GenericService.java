package com.esprim.stageback.service;

import com.esprim.stageback.mapper.GenericMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface GenericService<D, E, M> {

    GenericMapper<E, D> getMapper();

    E save(D dto);

    E save(E entity, D dto);

    List<E> save(List<E> entities);

    void deleteById(M id);

    Optional<E> findById(M id);

    List<E> findAll();

    Page<E> findAll(Pageable pageable);

    E update(D dto, M id);
}