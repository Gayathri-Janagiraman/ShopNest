# 🛍️ ShopNest

ShopNest is a full-stack e-commerce web application built using the MERN Stack. It provides a seamless online shopping experience with secure user authentication, product management, shopping cart functionality, and Stripe-powered test payments.

## 🌐 Live Demo

https://shop-nest-puce.vercel.app/

---

## 📖 About the Project

ShopNest is designed to simulate a modern e-commerce platform where users can browse products, manage their shopping cart, and complete secure test payments. The application also includes protected admin functionality for managing the product catalog.

---

## ✨ Features

### 🛒 User Features

* Browse products in a responsive interface.
* Add and remove products from the cart.
* Persistent cart using localStorage.
* Secure user authentication with Firebase.
* Protected checkout process.
* Stripe test payment integration.
* Mobile-friendly and responsive design.

### 🔐 Admin Features

* Add new products.
* Update existing products.
* Delete products.
* Protected admin-only routes.
* Middleware-based access control.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* Firebase Authentication

### Payment Gateway

* Stripe

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```text
ShopNest
│
├── client
│
├── server
│
├── screenshots
│
└── README.md
```

---

## 📸 Screenshots

### Home Page

(screenshots/HomePage.png)

### Product Listing

(screenshots/Product.png)

### Shopping Cart

(screenshots/Cart.png)

### Checkout & Payment 

![Payment](screenshots/Payments.png)

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/shopnest.git
cd shopnest
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Configure the required environment variables.

### Frontend

* Firebase Configuration
* Stripe Publishable Key

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
FIREBASE_ADMIN_CONFIG=your_firebase_admin_credentials
```

---

## ▶️ Run Locally

### Start Backend

```bash
cd server
node index.js
```

### Start Frontend

```bash
cd client
npm start
```

---

## 🎯 Future Enhancements

* Order history and tracking.
* Product search and filtering.
* Wishlist/Favorites functionality.
* Enhanced checkout with shipping details.
* User profile management.
* Product reviews and ratings.

---

## 📚 Learning Outcomes

This project helped me gain practical experience in:

* Building full-stack MERN applications.
* Implementing Firebase Authentication.
* Integrating Stripe payment gateway.
* Managing MongoDB Atlas databases.
* Creating protected backend routes.
* Deploying full-stack applications using Vercel and Render.

---

## 📄 License

This project is developed for educational and portfolio purposes.

---

⭐ If you found this project useful, consider giving it a star.
