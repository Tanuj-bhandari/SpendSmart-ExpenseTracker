# Expense Tracker Web App

A full-stack expense tracking application built with **MERN** (MongoDB, Express, React, Node.js) featuring:

* 💰 Income, expense & savings tracking
* 📊 Visual data charts
* 🔐 Secure user authentication (JWT)
* 📂 Filter by date and category
* 🎨 Responsive, professional UI

---

## 🚀 Live Demo

* **Frontend**: [https://spend-smart-expense-tracker-six.vercel.app/](https://spend-smart-expense-tracker-six.vercel.app/)
* **Backend**: [https://spendsmart-expensetracker.onrender.com](https://spendsmart-expensetracker.onrender.com)

---

## 🧠 Features

* User registration & login (JWT secured)
* Add/edit/delete transactions
* Filter transactions by category/date
* Dashboard summary (income, expense, balance)
* Pie chart for visual insights
* Fully responsive UI

---

## 🎥 Demo Video

Watch the full walkthrough here: [https://drive.google.com/drive/folders/1pIz9EJIgME9dQXLGPUqSynZiccoG4WRs?usp=sharing](https://drive.google.com/drive/folders/1pIz9EJIgME9dQXLGPUqSynZiccoG4WRs?usp=sharing)

---

## 🛠️ Tech Stack

### Frontend

* React + Vite
* Tailwind CSS
* Axios
* Chart.js

### Backend

* Node.js + Express
* MongoDB (via Atlas)
* JWT for auth
* Mongoose ODM

---

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── README.md
├── .gitignore
```

---

## ⚙️ Installation & Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2. Backend Setup

```bash
cd backend
npm install

# .env file
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

node index.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# .env file
VITE_API_BASE_URL=https://your-backend.onrender.com/api

npm run dev
```

---

## 🌐 Deployment

### Backend (Render)

* Push backend folder to GitHub
* Create new Web Service on Render
* Set environment variables
* Point root to `/backend`

### Frontend (Vercel)

* Push frontend folder to GitHub
* Import to Vercel
* Set root as `frontend`
* Set `VITE_API_BASE_URL`

---

## 🧠 ER Diagram

```text
User
├── _id
├── email
├── password

Transaction
├── _id
├── userId (ref User)
├── amount
├── category
├── description
├── date
```

---

## 📩 Contact

Created by **Tanuj Bhandari**
Feel free to reach out via GitHub or LinkedIn


