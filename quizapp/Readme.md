4 steps to add .env in springboot

Step1: Add the dependencies in the pom.xml
```
		<dependency>
			<groupId>io.github.cdimascio</groupId>
			<artifactId>java-dotenv</artifactId>
			<version>5.2.2</version>
		</dependency>
```
Step 2: Add the .env file in the root ie where pom.xml is present and declare the values in the .env
Step 3: Navigate to the main class and write the below code


//import statement 
`import io.github.cdimascio.dotenv.Dotenv;`

//inside main method
```
Dotenv dotenv = Dotenv.load();
System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
```
//same for all the other env variables


Step 4: Finally add in the application.properties like

```
spring.config.import=optional:file:.env[.properties] //optional, works without this as well
spring.datasource.password = ${DB_PASSWORD}
```