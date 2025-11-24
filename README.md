A full-stack web application built to manage EV charging stations, user bookings, payments, and real-time slot availability.
This project is developed using React.js, Java Spring Boot, and MySQL, providing a complete end-to-end solution for EV users and station admins.

Features
👤 User Features

User registration & login
Browse charging stations
View charging station details
Book a charging slot
Make payments
Manage profile
View saved stations

🛠 Admin Features
Admin login
Add / update / delete charging stations
Manage users
View and manage bookings
Dashboard with station statistics

🏗 Technology Stack
Frontend
React.js
Vite
Axios
React Router
CSS Modules
Backend
Java
Spring Boot
Spring MVC
Spring Data JPA
MySQL
Maven
Database
MySQL Workbench
JPA/Hibernate ORM

📁 Project Structure

  EV-Charging-Workspace/
│
├── ev-charging-frontend/     # React frontend
├── ev-charging-backend/      # Spring Boot backend
└── CONNECTIVITY_FIXES.md     # Documentation for connectivity fixes

⚙️ Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/sanchetkuchanwar2nbnsticcomp-jpg/EV-Charging-Station.git

🖥 Backend Setup (Spring Boot)
Navigate to backend
cd ev-charging-backend

Install dependencies
mvn clean install

Run the backend
mvn spring-boot:run

Backend runs on:
http://localhost:8080

🌐 Frontend Setup (React)

Navigate to frontend
cd ev-charging-frontend

Install dependencies
npm install

Start the React app
npm run dev

Frontend runs on:
http://localhost:5173

🔐 Environment Variables

Create .env inside ev-charging-frontend/:
VITE_API_URL=http://localhost:8080

🛢 Database Setup

Create database:
CREATE DATABASE evcharging;

Update details in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/evcharging
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

📸 Screenshots 

<img width="1918" height="948" alt="Screenshot 2025-11-24 111204" src="https://github.com/user-attachments/assets/25c2b11e-ca04-41d9-bda1-614794904820" />

<img width="1917" height="945" alt="Screenshot 2025-11-24 111222" src="https://github.com/user-attachments/assets/56c1058e-8ddc-4aa9-8f54-89d6c88010e3" />

<img width="1915" height="949" alt="Screenshot 2025-11-24 111312" src="https://github.com/user-attachments/assets/53dbb6a7-a133-4986-92ef-ea3465517536" />

<img width="1919" height="946" alt="Screenshot 2025-11-24 111323" src="https://github.com/user-attachments/assets/01a306ab-c540-4c8e-bf8f-eb0b95c632a0" />









