# Simple Feedback Application

A full-stack feedback submission application built with React, Node.js, Express, and MongoDB. Users can submit feedback through a form, and all submissions are displayed below the form.

## Live Demo

- **Frontend**: [https://your-netlify-site.netlify.app](https://feedbacks-ap.netlify.app/)
- **Backend (API)**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## Features

- Submit feedback with name, email, and message
- Display all feedback entries in real-time
- Stores feedback in MongoDB with timestamps
- Form validation and success notification on submit

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: Netlify (Frontend), Render (Backend)

---

## API Endpoints

- `POST /feedback` – Submit feedback
- `GET /feedback` – Get all feedback

---

## Getting Started Locally

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas URI or local MongoDB

### Clone Repository

```bash
git clone https://github.com/your-username/feedback-app.git
cd feedback-app
cd backend
npm install
# Create a .env file with MONGO_URI and PORT
npm run dev

cd frontend
npm install
npm start

feedback-app/
├── backend/
│   ├── index.js
│   └── routes/
├── frontend/
│   ├── src/
│   └── public/

Author
Vignesh D
Email: vignesh18003@gmail.com
