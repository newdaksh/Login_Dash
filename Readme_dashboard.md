# CRUD Advanced Project - July'25

A full-stack advanced CRUD (Create, Read, Update, Delete) application built with React (Vite) for the frontend and Node.js (Express, MongoDB) for the backend. This project demonstrates robust authentication, user management, password reset, file uploads, and more, following modern best practices.

## Features

### Frontend (React + Vite)
- User registration, login, and logout
- JWT-based authentication
- Password reset and change flows
- Responsive UI with reusable components
- User list and profile management
- File upload support (e.g., resume uploads)
- Form validation and error handling

### Backend (Node.js + Express + MongoDB)
- RESTful API endpoints for authentication and user management
- Secure password hashing (bcrypt)
- JWT authentication middleware
- File upload handling (Multer)
- Email notifications for password reset (nodemailer)
- Centralized error handling
- Modular controller, middleware, and route structure

## Project Structure

```
client/      # React frontend (Vite)
  src/
    components/   # Reusable UI components
    pages/        # Page components (Login, Register, UserList, etc.)
    services/     # API service layer
    utils/        # Utility functions (validators, etc.)
    styles/       # Global and modular CSS
server/      # Node.js backend (Express)
  controllers/    # Route controllers
  middlewares/    # Express middlewares
  models/         # Mongoose models
  routes/         # API route definitions
  utils/          # Utility modules (email, token, etc.)
  uploads/        # Uploaded files (resumes, etc.)
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```sh
git clone <repo-url>
cd CRUD_advanced -- Octal
```

### 2. Setup Backend
```sh
cd server
npm install
# Create a .env file (see below)
npm start
```

#### Example `.env` for Backend
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/crud_advanced
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 3. Setup Frontend
```sh
cd ../client
npm install
npm run dev
```

### 4. Access the App
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000/api](http://localhost:5000/api)

## API Endpoints (Backend)
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login
- `POST /api/auth/forgot-password` — Request password reset
- `POST /api/auth/reset-password` — Reset password
- `GET /api/users` — List users (protected)
- `PUT /api/users/:id` — Edit user (protected)
- `DELETE /api/users/:id` — Delete user (protected)
- `POST /api/users/upload` — Upload file (protected)

## Technologies Used
- **Frontend:** React, Vite, Axios, CSS Modules
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, Nodemailer, Bcrypt, JWT

## Screenshots
> Add screenshots of the UI here for better presentation.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

**Developed by Daksh Jain**
