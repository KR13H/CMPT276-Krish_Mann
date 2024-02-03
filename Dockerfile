FROM maven:3.8.8-eclipse-temurin-21-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim-buster
COPY --from=build /target/assignment_1-0.0.1-SNAPSHOT.jar assignment_1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "assignment_1.jar"]
