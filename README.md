# 🚀 Microservices Architecture with NestJS and Redis

This project is a hands-on implementation of a **microservices architecture** using **NestJS** and **Redis** as a message broker.  
It was inspired by the learning journey from the **IBM Full-Stack JavaScript Developer Certification**, aiming to apply backend concepts in a real-world, distributed system scenario.

---

## 🧩 Overview

The goal of this project is to explore how to design and build **scalable, decoupled applications** using NestJS microservices and asynchronous communication.  

Each microservice is an independent application that communicates with others through **Redis Pub/Sub messaging**.  
An **API Gateway (HTTP)** serves as the single entry point for all external requests, while the shared library (`libs/shared`) contains reusable DTOs, entities, and event definitions.

---

## ⚙️ Architecture

my-microservices-project/
├── apps/
│ ├── api-gateway/ # Central HTTP API entry point
│ └── users-service/ # Example microservice (handles user logic)
│
├── libs/
│ └── shared/ # Shared DTOs, entities, and events
│
├── docker-compose.yml # Redis, databases, and service orchestration
├── package.json
├── nest-cli.json
└── .env


---

## 🏗️ Components

### 🧠 API Gateway
- Receives HTTP requests
- Uses Redis to send messages to microservices via `ClientProxy`
- Aggregates and returns responses to the client

### ⚙️ Microservices
- Each service runs independently
- Listens to **Redis channels** for messages or events using `@MessagePattern` and `@EventPattern`
- Manages its own database and logic

### 🔄 Shared Library
- Contains shared **DTOs**, **entities**, and **event definitions**
- Ensures consistency across all services
- Simplifies code reuse and reduces duplication

---

## 💡 Technologies

| Category | Technologies |
|-----------|---------------|
| Backend Framework | NestJS (TypeScript) |
| Message Broker | Redis |
| ORM | TypeORM |
| Database | PostgreSQL |
| Containerization | Docker & Docker Compose |
| Architecture | Microservices + API Gateway |
| Tools | ESLint, Prettier, dotenv |

---

## 🧠 Key Learnings

- Understanding the role of the **API Gateway** as a single entry point  
- Implementing **asynchronous communication** between services using Redis  
- Structuring a **monorepo** with multiple independent services  
- Applying **best practices** with TypeORM and NestJS Modules  
- Managing shared resources via a central **library (`libs/shared`)**  

---

## 🧰 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YuriMascarenhasLourenco/notifications-microservices.git
cd nestjs-redis-microservices

2️⃣ Install dependencies
npm install

3️⃣ Run Redis (via Docker)
docker run -d --name redis -p 6379:6379 redis:7-alpine

4️⃣ Start the services
# Start the users microservice
npm run start:dev users-service

# Start the API Gateway
npm run start:dev api-gateway

5️⃣ Test endpoints
GET  http://localhost:3000/users
POST http://localhost:3000/users  { "name": "Alice", "email": "alice@mail.com" }

🗺️ Next Steps

Add Docker Compose for multi-service orchestration

Integrate PostgreSQL and persist data per microservice

Implement authentication & authorization via a dedicated service

Add logging tools (Winston)

🏅 About the Developer

This project is part of my continuous learning path after completing the IBM Full-Stack JavaScript Developer Certification.
The certification provided the foundation — now I’m turning that knowledge into practical, production-level experience.

💬 “The certification gave me the theory; this project is teaching me the reality.”

📬 Contact

Author:  Yuri Lourenco
LinkedIn: https://www.linkedin.com/in/yuri-m-lourenco-node/
GitHub: https://github.com/YuriMascarenhasLourenco
