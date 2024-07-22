package com.api.backend.Services.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.backend.DTO.Auth.AuthResponseDto;
import com.api.backend.DTO.Auth.LoginRequestDto;
import com.api.backend.DTO.Auth.RegisterRequestDto;
import com.api.backend.Exception.EmailOrPasswordIncorrectException;
import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Repository.UsuarioRepository;
import com.api.backend.Services.JwtService;
import com.api.backend.Services.UsuarioService;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.TipoUsuario;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService{

    private final UsuarioRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthResponseDto login(@Valid LoginRequestDto loginRequestDto) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDto.email(), loginRequestDto.contrasena())
            );
        } catch (AuthenticationException e) {
            throw new EmailOrPasswordIncorrectException("incorrect email or password ");
        }
        UserDetails user = userRepository.findByEmail(loginRequestDto.email()).orElseThrow();
        String token = jwtService.getToken(user);
        return new AuthResponseDto(token);
    }

    @Override
    public AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto) {
        Usuario user = new Usuario();
        user.setEmail(registerRequestDto.email());
        user.setContrasena(passwordEncoder.encode(registerRequestDto.contrasena()));
        user.setNombre(registerRequestDto.nombre());
        user.setTipoUsuario(TipoUsuario.USUARIO);
        user.setFechaRegistro(new Date());
        userRepository.save(user);
        String token = jwtService.getToken(user);
        return new AuthResponseDto(token);
    }

    @Override
    public Usuario getUserByEmail() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Usuario> userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            throw new ResourceNotFoundException("User not found");
        }
        return userOptional.get();
    }

}
