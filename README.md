# 🚀 Node.js HTTP Server (Dockerized)

A minimal Node.js HTTP server running on **port 5000**, fully containerized using Docker.

---

## 📌 Overview

This project demonstrates:

* Basic Node.js server setup
* Simple routing
* Docker containerization

It’s designed as a **beginner-friendly DevOps + backend starter project**.

---

## ⚙️ Tech Stack

* Node.js (built-in `http` module)
* Docker

---

## 📁 Project Structure

```
.
├── server.js
├── Dockerfile
└── README.md
```

---

## 🌐 Endpoints

| Route     | Description   |
| --------- | ------------- |
| `/`       | Home Page     |
| `/about`  | About Page    |
| Any other | 404 Not Found |

---

## ▶️ Run Locally (Without Docker)

```bash
node server.js
```

Open in browser:

```
http://localhost:5000
```

---

## 🐳 Run With Docker

### 1. Build Image

```bash
docker build -t node-server .
```

### 2. Run Container

```bash
docker run -p 5000:5000 node-server
```

### 3. Access App

```
http://localhost:5000
```

---

## 🛠 Docker Configuration

* Base Image: `node:18`
* Working Directory: `/app`
* Exposed Port: `5000`
* Start Command: `node server.js`

---

## ⚠️ Troubleshooting

### Port not working

Ensure correct port mapping:

```bash
docker run -p 5000:5000 node-server
```

---

### Docker permission issue

```bash
sudo usermod -aG docker $USER
```

Then log out and log back in.

---

### Docker not running

```bash
sudo systemctl start docker
```

---

## 📌 Key Learnings

* Creating a basic HTTP server in Node.js
* Understanding request routing
* Building and running Docker containers
* Port mapping (`host:container`)

---

## 🔧 Future Improvements

* Replace with Express.js
* Add environment variables
* Add logging & error handling
* Add CI/CD (GitHub Actions)
* Deploy to AWS (ECS / EC2)

---

## 💡 Author Note

This project is intentionally simple to focus on **fundamentals of backend + DevOps workflow**.

---
