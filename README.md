# 🖋️ EchoVerse — Where Voices Connect

**Developer:** Shiksha Nath
**Date:** September 2025

EchoVerse is a full-stack web application that provides users with a creative space to write, share, and explore ideas and stories. Built using modern web technologies, EchoVerse focuses on expression, community engagement, and secure user interaction.

---

## 📚 Table of Contents

* Overview
* Tech Stack
* Features
* Project Structure
* Installation & Setup
* Environment Variables
* Database Design
* API Endpoints
* Frontend Overview
* Future Enhancements
* Author

---

## 🧠 Overview

EchoVerse is a writing and idea-sharing platform designed to encourage creativity and thoughtful interaction.

Users can:

* Register and authenticate securely
* Write and publish posts
* Read and comment on posts shared by others
* Manage personal profiles and authored content

---

## ⚙️ Tech Stack

| Component       | Technology                 | Description                   |
| --------------- | -------------------------- | ----------------------------- |
| Frontend        | React.js, Vite, Axios, CSS | Responsive user interface     |
| Backend         | Node.js, Express.js        | RESTful API                   |
| Database        | PostgreSQL                 | Persistent data storage       |
| ORM             | Prisma                     | Database modeling and queries |
| Authentication  | JWT (JSON Web Tokens)      | Secure authentication         |
| Version Control | Git, GitHub                | Source code management        |

---

## ✨ Features

* 🔐 Secure JWT-based authentication
* 📝 Create, edit, and read posts
* 💬 Comment on posts
* 👤 User profile management
* 📱 Fully responsive design
* ⚡ Seamless frontend–backend integration

---

## 📁 Project Structure

```
EchoVerse/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── generated/prisma/
│   ├── prisma/schema.prisma
│   ├── .env
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ⚡ Installation & Setup

### 🧩 Prerequisites

Make sure the following are installed:

* Node.js (v16+)
* PostgreSQL
* Git

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/shiksha-Nath02/echoVerse.git
cd echoVerse
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma generate
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
DATABASE_URL=postgresql://postgres:1037-Shiksha@localhost:5432/shikshadb
JWT_SECRET=this_is_my_secret
NODE_ENV=development
PORT=5000
```

### Frontend `.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## 🧩 Database Design (Prisma Models)

```prisma
model User {
  id        String   @id @default(uuid())
  username  String
  email     String   @unique
  password  String
  posts     Post[]
  comments  Comment[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  comments  Comment[]
  createdAt DateTime @default(now())
}

model Comment {
  id        String   @id @default(uuid())
  content   String
  postId    String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  post      Post     @relation(fields: [postId], references: [id])
  createdAt DateTime @default(now())
}
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| POST   | `/api/auth/signup` | Register a new user        |
| POST   | `/api/auth/login`  | Authenticate user          |
| GET    | `/api/auth/me`     | Get current logged-in user |
| POST   | `/api/auth/logout` | Logout user                |

### Posts

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/api/post`     | Fetch all posts   |
| POST   | `/api/post`     | Create a new post |
| GET    | `/api/post/:id` | Fetch post by ID  |

### Comments

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| POST   | `/api/comment` | Add comment to a post |

---

## 💻 Frontend Overview

* **Framework:** React + Vite
* **HTTP Client:** Axios
* **Routing:** React Router
* **State Management:** React Hooks

### Main Pages

* 🏠 Home — Displays post feed
* 📝 Create Post — Write and publish ideas
* 👤 Profile — Manage user posts
* 🔑 Login / Signup — Secure authentication

---

## 🔮 Future Enhancements

* 🔔 Real-time notifications for interactions
* 🔎 Search and filtering of posts
* 🌐 Social login integration
* 💅 Enhanced UI animations
* 🧠 AI-assisted content recommendations

---

## 🧑‍💻 Author

**Shiksha Nath**
📧 Email: [shiksha.nath.ug22@gmail.com](mailto:shiksha.nath.ug22@gmail.com)
🔗 GitHub: [https://github.com/shiksha-Nath02](https://github.com/shiksha-Nath02)

> **“EchoVerse — where thoughts resonate and voices are heard.”** ✨
