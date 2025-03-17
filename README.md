🍏 Vegetables & Fruits App (MERN)

📌 Overview

The Vegetables & Fruits App is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to showcase and manage a collection of fresh vegetables and fruits. Users can browse products, add them to a cart, and view the total price dynamically.

✨ Features

✅ Product Listing: Displays a list of vegetables and fruits fetched from the backend.✅ Add to Cart: Users can add products to their cart with real-time updates.✅ Remove from Cart: Allows users to remove items from the cart.✅ Dynamic Pricing: Automatically updates the total price and cart item count.✅ Responsive UI: Styled with Bootstrap for a clean and user-friendly interface.

🛠 Tech Stack

🔹 Frontend:

React.js (with Context API for state management)

Bootstrap (for styling)

React Router (for navigation)

Axios (for API calls)

🔹 Backend:

Node.js & Express.js (REST API)

MongoDB & Mongoose (Database)

CORS (to handle cross-origin requests)

🚀 Installation & Setup

📌 Prerequisites

Ensure you have the following installed:

Node.js

MongoDB (Running locally or via cloud, e.g., MongoDB Atlas)

📥 Steps

1️⃣ Clone the repository:

git clone https://github.com/saipabi/frontend-vegetables.git
cd frontend-vegetables

# Clone backend repo
git clone https://github.com/saipabi/backend-vegetables.git
cd backend-vegetables

2️⃣ Install dependencies:

npm install  # Run in both frontend and backend directories

3️⃣ Configure environment variables:

Create a .env file in the backend directory and add:

MONGO_URI=your-mongodb-uri
PORT=5000

4️⃣ Run the application:

Frontend:

npm run dev

The frontend should now be running at http://localhost:5173 (or the port assigned by Vite).

Backend (If not deployed):

npm start

The backend will be running at http://localhost:5000.

🌍 Live Demo

🔗 Frontend: Vegetables & Fruits App🔗 Backend API: Vegetables API

🔗 API Endpoints (For Developers)

Method

Endpoint

Description

GET

/products

Fetch all vegetables & fruits

POST

/cart

Add an item to the cart

GET

/cart

Fetch items in the cart

DELETE

/cart/:id

Remove an item from the cart

👥 Contributors

👤 Suriya R📧 Email: saipabi123@gmail.com🔗 GitHub: https://github.com/saipabi

📜 License

This project is licensed under the MIT License.
