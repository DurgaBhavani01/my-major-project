# Wanderlust - Travel Listing Web App

Wanderlust is a full-stack travel listing web application where users can create, view, edit, and delete travel destinations. It features map integration using Leaflet.js and allows image uploads via Cloudinary. Designed with a clean EJS templating layout, it's connected to a cloud database (MongoDB Atlas) and deployed on Render.

---

## Features

User authentication and session management
Interactive map integration with custom markers (Leaflet.js)
Image upload & cloud storage (Cloudinary)
Add detailed descriptions, price, and location for listings
Full CRUD functionality for listings
MongoDB Atlas cloud database
Responsive design using Bootstrap

---

## Tech Stack

This project uses a Node.js backend with Express.js, connected to a MongoDB Atlas cloud database using Mongoose. The frontend is rendered with EJS templates and styled using Bootstrap 5. Image uploads are managed via Cloudinary, and interactive maps are integrated with Leaflet.js. The app is deployed on Render.

# Key Technologies:
Backend: Node.js, Express.js
Database: MongoDB Atlas, Mongoose
Templating & Styling: EJS, Bootstrap 5
Cloud Services: Cloudinary (for image uploads)
Map Integration: Leaflet.js
Deployment: Render

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
npm install

### 2. Environment Variables
Create a `.env` file in the root directory and add the following:

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

DATABASE_URL=your_mongodb_atlas_url
SESSION_SECRET=any_secure_string

### 3.Run the Application
npm start


### Author
*** G.Durga Bhavani ***


