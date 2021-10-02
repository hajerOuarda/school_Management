package com.esprim.stageback.dao;

import com.esprim.stageback.models.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {

    @Query("SELECT s FROM Subject s INNER JOIN s.classes c " +
            "WHERE CONCAT(c.filliers, ' ', c.niveauEtude) = :className")
    Set<Subject> findAllByClassName(@Param("className") String className);

}