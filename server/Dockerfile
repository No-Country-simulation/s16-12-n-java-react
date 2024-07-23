Etapa 1: Construcción de la aplicación
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

Etapa 2: Crear la imagen final de la aplicación
FROM openjdk:17-jdk-alpine
ENV PROFILE=prod
WORKDIR /app
Copiar solo el archivo jar necesario
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080
CMD ["java", "-Dspring.profiles.active=${PROFILE}", "-jar", "/app/app.jar"]
