# 🔁 Skill Exchange Platform

A rule-based skill exchange platform where users **learn one skill by teaching another** — without money, AI, or ML.

This project focuses on **clean backend architecture**, **SOLID principles**, and **explainable matching logic**, making it highly suitable for interviews and real-world systems.

---

## 🚀 Problem Statement

Many learners lack money or access to mentors, while many skilled people are willing to teach but want to learn something else.

There is no simple platform that enables **mutual skill exchange** without money.

---

## 💡 Solution

The Skill Exchange Platform allows users to:
- Offer skills they can teach
- Request skills they want to learn
- Get matched with other users who have **complementary skills**
- Exchange skills fairly using a **rule-based greedy algorithm**

No AI. No ML. Fully deterministic and explainable.

---

## 🧠 Core Concepts

- **Rule-based matching**
- **Greedy algorithm** (rating-based prioritization)
- **Strategy Pattern** for extensible matching logic
- **Repository Pattern** for storage abstraction
- **Service Layer** for business logic
- **SOLID Principles** throughout the system

---

## 🧱 Architecture Overview

Entities
├── User
├── Skill
├── Rating
├── SkillExchangeRequest

Repositories (Abstractions)
├── UserRepository
├── RatingRepository
├── SkillExchangeRequestRepository

Services
├── UserService
├── MatchService
├── RatingService
├── SkillExchangeRequestService
├── AdminReportService

Strategies
├── SkillMatchStrategy
└── GreedySkillMatchStrategy


---

## ⚙️ Matching Logic (Greedy & Fair)

A match is valid **only if**:

- User A wants a skill that User B offers  
- AND User B wants a skill that User A offers  

Matches are then sorted by **rating (descending)**.

This ensures:
- Fair exchange
- No one-sided learning
- High-quality mentors first

---

## ⭐ Rating & Feedback System

- Users rate each other after exchanges
- Ratings are stored independently
- Average rating is computed dynamically
- No mutation of User entity (OCP respected)

---

## 🔄 Skill Exchange Workflow

1. User finds matches
2. Sends skill exchange request
3. Target user accepts or rejects
4. Exchange is completed
5. Both users can rate each other

Valid state transitions:
PENDING → ACCEPTED → COMPLETED
PENDING → REJECTED


---

## 🛡️ Admin Reporting

Admins can:
- View top-rated users
- Detect low-rated users
- View pending exchange requests

Admin logic is **read-only** and does not mutate data.

---

## 🧪 Tech Stack

**Backend**
- Node.js
- JavaScript
- Express (planned)
- In-memory repositories (DB-ready)

**Frontend (Planned)**
- HTML
- CSS
- JavaScript

**Database (Planned)**
- PostgreSQL / MongoDB

---

## 🎯 Why This Project Is Interview-Ready

- No black-box ML
- Clean architecture
- SOLID principles applied practically
- Explainable algorithms
- Easily extensible and testable

---

## 📌 Future Improvements

- REST API using Express
- PostgreSQL repositories
- Authentication (JWT)
- Frontend UI
- Real-time notifications

