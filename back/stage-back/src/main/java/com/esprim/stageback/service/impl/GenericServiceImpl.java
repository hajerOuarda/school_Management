package com.esprim.stageback.service.impl;

import com.esprim.stageback.service.GenericService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class GenericServiceImpl<D, E, M>
        implements GenericService<D, E, M> {

    abstract JpaRepository<E, M> getRepository();

    @Override
    public E save(D dto) {
        E entity = getMapper().asEntity(dto);
        entity = getRepository().save(entity);
        return entity;
    }

    @Override
    public List<E> save(List<E> entities) {
        return (List<E>) getRepository().saveAll(entities);
    }

    @Override
    public void deleteById(M id) {
        getRepository().deleteById(id);
    }

    @Override
    public Optional<E> findById(M id) {
        return getRepository().findById(id);
    }

    @Override
    public List<E> findAll() {
        return (List<E>) getRepository().findAll();
    }

    @Override
    public Page<E> findAll(Pageable pageable) {
        Page<E> entityPage = getRepository().findAll(pageable);
        List<E> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public E update(D dto, M id) {
        Optional<E> optional = findById(id);
        if (optional.isPresent()) {
            return save(dto);
        }
        return null;
    }

    @Override
    public E save(E entity, D dto) {
        entity = getMapper().asEntity(dto);
        entity = getRepository().save(entity);
        return entity;
    }

}
