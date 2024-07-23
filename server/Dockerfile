# Etapa 1: Construye la aplicacion Spring Boot
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: Crea la imagem final de la aplicacion
FROM openjdk:17-jdk-alpine
ENV PROFILE=dev
WORKDIR /app
COPY --from=build /app/target/ /app/
RUN cp /app/backend-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080
CMD ["java", "-Dspring.profiles.active=${PROFILE}", "-jar", "/app/app.jar"]
