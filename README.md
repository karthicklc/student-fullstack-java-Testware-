\# Student Full Stack Management System



\## Project Overview



The Student Full Stack Management System is a web application that manages student information using a React frontend, Spring Boot REST API backend, and MySQL database.



This project demonstrates full-stack integration, REST API development, frontend API requests using Axios and Fetch, input validation, error handling, Git, and GitHub.



\## Technologies Used



\- \*\*Frontend:\*\* React, Vite, JavaScript, Axios

\- \*\*Backend:\*\* Java, Spring Boot, Spring Data JPA

\- \*\*Database:\*\* MySQL

\- \*\*API Communication:\*\* REST APIs, HTTP, JSON

\- \*\*Version Control:\*\* Git and GitHub

\- \*\*Testing:\*\* Browser DevTools and Postman



\## Features



\- View all students

\- Add new student records

\- Retrieve a student by ID

\- Update student information

\- Delete student records

\- Search students by name

\- Validate student inputs

\- Display API errors and validation messages

\- Handle missing student records

\- Integrate React with Spring Boot

\- Configure CORS and the Vite development proxy

\- Demonstrate Axios and Fetch API requests



\## Project Structure



```text

TASK14\_KARTHICK LC/

├── frontend/

│   ├── src/

│   │   ├── App.jsx

│   │   ├── Q15.jsx

│   │   ├── Q16.jsx

│   │   ├── Q17.jsx

│   │   ├── api.jsx

│   │   └── fetchApi.jsx

│   ├── .env

│   ├── package.json

│   └── vite.config.js

├── studentbackend/

│   └── studentbackend/

│       ├── pom.xml

│       └── src/

│           └── main/

│               ├── java/

│               └── resources/

└── OUTPUTS/

&#x20;   └── Assignment screenshots

```



\## Prerequisites



Install the following before running the project:



\- Java JDK compatible with your Spring Boot version

\- Maven, or use the included Maven wrapper

\- Node.js and npm

\- MySQL Server

\- Git



\## Database Configuration



Create the MySQL database:



```sql

CREATE DATABASE student\_db;

```



Configure the database URL, username, and password in your local Spring Boot configuration.



Use environment variables for database credentials. Do not commit real passwords or secrets to GitHub.



\## Running the Backend



Open a terminal in the `studentbackend/studentbackend` directory.



Run:



```bash

mvn spring-boot:run

```



The backend runs at:



`http://localhost:8080`



\## Running the Frontend



Open another terminal in the `frontend` directory.



Install dependencies:



```bash

npm install

```



Start the development server:



```bash

npm run dev

```



Open the local URL shown by Vite, normally:



`http://localhost:5173`



\## REST API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| GET | `/api/students` | Retrieve all students |

| GET | `/api/students/{id}` | Retrieve a student by ID |

| GET | `/api/students/search?name={name}` | Search students by name |

| POST | `/api/students` | Add a student |

| PUT | `/api/students/{id}` | Update a student |

| DELETE | `/api/students/{id}` | Delete a student |



\### Example Student JSON



```json

{

&#x20; "name": "Karthick",

&#x20; "email": "karthick@example.com",

&#x20; "department": "AI \& DS",

&#x20; "marks": 85

}

```



\## Frontend API Integration



The frontend uses Axios and Fetch to communicate with the backend REST APIs.



The project demonstrates loading states, empty results, API error handling, student form validation, deletion confirmation, and debounced name search.



\## CORS and Vite Proxy



The project demonstrates two approaches to frontend-backend communication during development:



1\. Spring Boot CORS configuration to allow requests from the React development server.

2\. Vite proxy configuration to forward `/api` requests to the Spring Boot backend.



Use the appropriate configuration for the method being demonstrated.



\## Git and GitHub



Git and GitHub are used for version control and collaboration.



The assignment demonstrates meaningful commits, feature branches, pull requests, README documentation, and repository management.



\## Learning Outcomes



\- Understand full-stack application architecture.

\- Build and consume REST APIs.

\- Integrate React with Spring Boot.

\- Work with a MySQL database.

\- Handle validation and HTTP errors.

\- Use Axios and Fetch.

\- Configure CORS and Vite proxy.

\- Manage source code using Git and GitHub.



\## Author



Karthick LC



AI \& Data Science Student



