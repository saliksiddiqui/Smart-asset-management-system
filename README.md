# Smart Asset Management System – Frontend

A role-based Smart Asset Management System built using React and Redux Toolkit.  
This project demonstrates authentication flow, protected routes, role-based access, and clean frontend architecture.

---

## Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios (with interceptors)
- JavaScript (ES6+)

---

## User Roles

The application supports three roles:

- **Employee**
- **Manager**
- **Admin**

Each role has different access and permissions.

---

## Features

### Authentication
- Signup & Login flow (mocked, frontend-only)
- Role selection during signup
- JWT-like auth logic handled via Redux
- Logout functionality

### Role-Based Access
- Protected routes based on authentication & role
- Unauthorized users are redirected to login

### Employee
- Upload assets (file UI)
- View own uploaded assets
- Track asset status (Pending / Approved / Rejected)

### Manager
- View all uploaded assets
- See employee username with each asset
- Approve or reject assets

### Admin
- View all assets
- View employee usernames and asset status
- Read-only access

### UI & Architecture
- Responsive UI using Tailwind CSS
- Centralized state management with Redux Toolkit
- Clean folder structure
- No Context API
- No inline CSS
- No direct API calls inside components

---

## Project Structure

```txt
src/
├── api/
│   └── axios.js
├── app/
│   └── store.js
├── components/
│   └── Navbar.jsx
├── features/
│   ├── users/
│   │   └── userSlice.js
│   └── assets/
│       └── assetSlice.js
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Employee.jsx
│   ├── Manager.jsx
│   └── Admin.jsx
├── routes/
│   ├── ProtectedRoute.jsx
│   └── RootRedirect.jsx
├── App.jsx
├── main.jsx
└── index.css