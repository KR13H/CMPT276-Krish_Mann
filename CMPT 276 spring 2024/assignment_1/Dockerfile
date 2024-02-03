
FROM 3.9.6-eclipse-temurin-11 AS build
COPY . .   
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim-buster
COPY --from=stage /target/assignment_1-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar" , "assignment_1.jar" ] 
# ffhh
