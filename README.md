Todo List App - Backend Setup Guide
Overview
Backend for the Todo List App built with Express.js, MySQL, and Prisma. Provides APIs for managing tasks.

Prerequisites
Node.js (v14 or later)
MySQL (local or cloud)
npm or yarn
Setup Instructions

1. Clone the Repository
git clone https://github.com/harrisMaqsood/Back-End-Express.js-API
cd Back-End-Express.js-API

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file and add:
PORT=5000
DATABASE_URL="mysql://username:password@localhost:3306/todo_app_db"
Replace username, password, and localhost with your MySQL credentials.

4. Set Up Prisma
Run the following commands to set up the database schema:
npx prisma migrate dev --name init

5. Run the Backend Server
node server.js
