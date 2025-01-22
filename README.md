# Todo List App - Backend Setup Guide

## Overview

This is the **Backend** for the Todo List App, built using **Express.js**, **MySQL**, and **Prisma**. It provides APIs for managing tasks, such as creating, editing, deleting, and toggling task completion.

---

## Prerequisites

Before setting up the backend, ensure you have the following installed:

- **Node.js (v14 or later)**  
  [Download Node.js](https://nodejs.org/en/)

- **MySQL** (local or cloud setup)  
  - [Install MySQL](https://dev.mysql.com/downloads/installer/) (for local MySQL server)
  - Or, use a cloud MySQL service (e.g., AWS RDS, PlanetScale, etc.)

- **npm** or **yarn** for package management:
  - **npm**: [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - **yarn**: [Install yarn](https://yarnpkg.com/getting-started/install)

---

## Setup Instructions

### 1. Clone the Repository

- Clone the repository to your local machine:
  ```bash
  git clone https://github.com/harrisMaqsood/Back-End-Express.js-API

### 2. Navigate into the project directory
- cd Back-End-Express.js-API
 
### 3. Install Dependencies
- npm install

### 4. Configure Environment Variables
PORT=5000
DATABASE_URL="mysql://username:password@localhost:3306/todo_app_db"

### 5. Set Up Prisma
- Set up Prisma to interact with your MySQL database:

- npx prisma migrate dev --name init

### 6. Run the Backend Server
- node server.js



