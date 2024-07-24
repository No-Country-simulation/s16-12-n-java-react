package com.api.backend.Repository;

import com.api.backend.entities.Propuesta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PropuestaRepository extends JpaRepository<Propuesta, Long> {
    Page<Propuesta> findAllByStatusTrue(Pageable pageable);

    Optional<Propuesta> findByIdAndStatusTrue(Long id);
}
