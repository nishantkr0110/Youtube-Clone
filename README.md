
# YouTube Clone - Backend 🎬

This is the backend API for my YouTube Clone project.  
It’s built with **Node.js**, **Express**, and **MongoDB** to handle user authentication, video uploads, and fetching video data.  
This API works together with the frontend to create a full-stack YouTube-like experience.

---

## 🚀 Purpose
The backend is responsible for:
- User authentication (signup/login)
- Storing video metadata in MongoDB
- Providing video lists and details to the frontend
- Handling video upload routes
- Managing user profiles

---

## 🛠 Tech Stack
- **Node.js** (server)
- **Express.js** (routing)
- **MongoDB + Mongoose** (database)
- **Multer** (for handling video uploads)
- **JWT** (authentication)

---

## ⚙️ Setup & Installation
1. Clone this repository:

   git clone <https://github.com/nishantkr0110/Youtube-Clone.git>
   cd youtube-backend

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. The API will be running on:
   http://localhost:5000


## 📌 Usage

POST /api/auth/signup → Create a new account

POST /api/auth/login → Login and get a token

GET /api/videos → Get all videos

POST /api/videos → Upload a video (requires authentication)

GET /api/videos/:id → Get single video details


## Project Structure

I had originally developed the frontend and backend in separate GitHub repositories with full commit history. However, I was unable to merge them into a single repository using Git submodules as intended. Therefore, I restructured and combined the project in a cleaner way, which is now reflected in this repository.