# 🛍️ ShopNest – Mini E-commerce Platform

**ShopNest** is a full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Firebase Authentication** and **Stripe Payment Integration**. It allows users to browse products, add them to a cart, and securely make test payments. Admin users can manage the product catalog through protected routes.

---

## 🔧 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB (Atlas)
- **Authentication**: Firebase Auth
- **Payments**: Stripe
- **Deployment**: Vercel (frontend), Fly.io/Render (backend)

---

## ✨ Features

### 🛒 User Features
- View products in a responsive grid
- Add/remove items to/from the cart
- View total cart value and item count
- Secure Firebase-based signup/login
- Protected checkout flow using Stripe
- Mobile responsive UI

### 🔐 Admin Features
- Add, update, or delete products (via admin-only routes)
- Admin access protected by middleware

---

## 📁 Folder Structure

```
ShopNest/
├── client/      # React frontend
├── server/      # Express backend
├── .env         # Environment variables
```

---

## 🚀 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/shopnest.git
   cd shopnest
   ```

2. **Install dependencies**
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     cd ../server
     npm install
     ```

3. **Setup `.env` files** in both `client` and `server` with:
   - Firebase config
   - MongoDB connection string
   - Stripe secret key

4. **Run both servers**
   - Backend:
     ```bash
     cd server
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

---

## ✅ Test Login Details

> You can use Firebase Authentication for test user signups or logins. Admin users are identified using custom claims or backend logic.

---

## 📦 Future Enhancements

- Order history and management
- Search and filter options
- Mark products as favorites and view them in a separate "Favorites" section
- Collect user details like name and address during checkout to include in the payment process

