# 🚀 Candidate Management API

A simple **Node.js + Express + MongoDB** CRUD API to manage candidates.  
This project demonstrates REST APIs with full CRUD operations, middleware, and Mongoose features.

---

## 📌 Features

- ✅ Create single & multiple candidates
- ✅ Get all candidates
- ✅ Get candidate by ID
- ✅ Update candidate (PUT & PATCH)
- ✅ Delete candidate (single)
- ✅ Middleware (CORS, Helmet, Morgan)
- ✅ Mongoose schema, virtuals & hooks

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API testing)

---

## 📁 Folder Structure

```

backend/
│
├── models/
│   └── Candidate.js
│
├── routes/
│   └── candidateRoutes.js
│
├── server.js
├── package.json

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd backend
````

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongodb://127.0.0.1:27017/candidateDataBase
```

---

### 4️⃣ Run the server

```bash
node server.js
```

👉 Server runs on:

```bash
http://localhost:5000
```

---

## 🔗 API Endpoints

---

### 📌 GET all candidates

```bash
GET /api/candidates
```

---

### 📌 GET candidate by ID

```bash
GET /api/candidates/:id
```

---

### 📌 POST (Add candidate)

#### 🔹 Single

```json
{
  "name": "Suresh",
  "skill": "React"
}
```

#### 🔹 Multiple

```json
[
  {
    "name": "Ram",
    "skill": "Node"
  },
  {
    "name": "John",
    "skill": "MongoDB"
  }
]
```

---

### 📌 PUT (Full update)

```bash
PUT /api/candidates/:id
```

---

### 📌 PATCH (Partial update)

```bash
PATCH /api/candidates/:id
```

---

### 📌 DELETE (Single)

```bash
DELETE /api/candidates/:id
```

---

## 🧠 Important Concepts Used

### 🔹 Middleware

```js
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
```

---

### 🔹 Mongoose Virtual

```js
candidateSchema.virtual("info").get(function () {
  return this.name + " - " + this.skill;
});
```

---

### 🔹 Pre-save Hook

```js
candidateSchema.pre("save", function(next) {
  console.log("Saving candidate...");
});
```

---

## ⚠️ Notes

* Ensure MongoDB is running before starting the server
* Use Postman to test APIs
* PATCH is used for partial updates
* PUT is used for full updates

---

## 🚀 Future Improvements

* Add validation (required fields)
* Add authentication (JWT)
* Add pagination & filtering
* Add error handling middleware

---

## 👨‍💻 Author

Suresh

---
