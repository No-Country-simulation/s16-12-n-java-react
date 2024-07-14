package com.api.backend.Services;


import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;


import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;


public interface JwtService {
    String getToken(UserDetails login);
    String getToken(Map<String,Object> extraClaims, UserDetails user);
    Key getKey();
    String getUsernameFromToken(String token);
    boolean isTokenValid(String token, UserDetails userDetails);
    Claims getAllClaims(String token);
    <T> T getClaim(String token, Function<Claims, T> claimsResolver);
    Date getExpiration(String token);
    boolean isTokenExpired(String token);
}
