🌾 FarmMitra – Smart Crop Advisory System

SIH 2025 Problem Statement #SIH-AGRI-XXX
(Replace XXX with your official PS number)




🎯 What It Does

FarmMitra is an AI-powered crop advisory platform that provides personalized farming recommendations, pest/disease detection, and live market prices to small and marginal farmers using a simple, multilingual, and offline-friendly interface.

Live Demo: https://farmmitra.vercel.app

✨ Key Features

✅ Location-based crop advisory using weather & soil data

✅ AI-powered pest & disease detection via image upload

✅ Live mandi (market) price tracking with trends

✅ Hindi & English language support

✅ Offline-first support with background sync

✅ Voice-enabled interface for low-literacy users

✅ Secure user authentication

✅ Fully responsive (mobile-first) design

🛠️ Tech Stack

Frontend

React 19

TypeScript

Vite 6

TailwindCSS v4

DaisyUI v5

TensorFlow.js

React Query + Zustand

PWA (Offline Support)

Backend

Node.js 22 LTS

Express.js 5

TypeScript

MongoDB + Mongoose

JWT Authentication

Deployment

Frontend: Vercel

Backend: Railway

🚀 Quick Start
Prerequisites

Node.js 22+ (LTS recommended)

npm or yarn

MongoDB (Local or Atlas)

Installation
# Clone repository
git clone https://github.com/your-username/farmmitra.git
cd farmmitra

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

Environment Setup
Frontend (frontend/.env)
VITE_API_BASE_URL=http://localhost:5000/api

Backend (backend/.env)
PORT=5000
MONGODB_URI=mongodb://localhost:27017/farmmitra
JWT_SECRET=super-secret-key
CORS_ORIGIN=http://localhost:5173

Run Development Servers
# Terminal 1 - Frontend
cd frontend
npm run dev
# Runs on http://localhost:5173

# Terminal 2 - Backend
cd backend
npm run dev
# Runs on http://localhost:5000

📁 Project Structure
farmmitra/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── i18n/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
│
└── README.md

📡 API Endpoints
Authentication

POST /api/auth/register – Register new user

POST /api/auth/login – Login user

Crop Advisory

POST /api/advisory – Get crop advisory (weather + soil + crop)

Pest & Disease Detection

POST /api/pest-detection – Upload image & detect disease

GET /api/pest-detection/history – View detection history

Market Prices

GET /api/market-prices – Get mandi prices by crop & location

🚀 Deployment
Frontend (Vercel)
cd frontend
vercel --prod

Backend (Railway)

Create a new Railway project

Connect GitHub repository

Add MongoDB database

Configure environment variables

Deploy (auto-deploy on push)

👥 Team

Team Member 1 – Frontend Developer

Team Member 2 – Backend Developer

Team Member 3 – AI / ML Engineer

Team Member 4 – UI/UX & Research

Mentor: Divyansh Bhardwaj (@dbc2201
)

📄 License

This project is licensed under the Apache License 2.0
See the LICENSE
file for details.

📞 Contact

Email: farmmitra.team@gmail.com

GitHub: https://github.com/your-username/farmmitra

Live Demo: https://farmmitra.vercel.app

🌱 Built with ❤️ for SIH 2025

Empowering farmers with technology, trust, and timely advice.