package com.esprim.stageback.dao;

import com.esprim.stageback.models.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Class, Long> {

}