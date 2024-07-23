# Etapa 1: Construye la aplicacion Spring Boot
FROM maven:3.8.1-openjdk-17-slim AS build
WORKDIR /server
COPY src /server/src
COPY pom.xml /server
RUN mvn clean package -DskipTests

# Etapa 2: Crea la imagen final de la aplicacion
FROM openjdk:17-jdk-alpine
ENV PROFILE=dev
COPY --from=build /server/target/backend-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Dspring.profiles.active=${PROFILE}", "-jar", "/usr/local/lib/app.jar"]
