# Task Management API

This is a RESTful API for a task management system built with Node.js, Express.js, and Supabase. It allows users to create, read, update, and delete tasks, as well as assign tasks to specific users and filter tasks based on their status.

## Features

- CRUD operations for tasks
- CRUD operations for users
- User assignment for tasks with their user_id
- Task filtering by status and user_id
- Input validation and global error handling
- API documentation using Swagger

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sanyamk0/product-highway-assignment.git
   cd product-highway-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase credentials:

   ```bash
   PORT = 3000
   SUPABASE_URL = your_supabase_url
   SUPABASE_KEY = your_supabase_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:3000`.

5. In Supabase dashboard create tables

   ```bash
   Tasks
   title : text
   description : text
   status : text
   user_id : uuid
   ```

   ```bash
   Users
   name : text
   email : text
   password : text
   ```

## API Documentation

API documentation is available at `/api-docs` when running the server locally. You can also find the Swagger YAML file in the root directory (`swagger.yaml`).

## API Endpoints

### Tasks

- `POST /api/tasks`: Create a new task
- `GET /api/tasks`: Get all tasks (with optional status and user_id filters)
- `GET /api/tasks/:id`: Get a specific task by ID
- `PUT /api/tasks/:id`: Update a specific task
- `DELETE /api/tasks/:id`: Delete a specific task

### Users

- `POST /api/users`: Create a new user
- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a specific user by ID
- `PUT /api/users/:id`: Update a specific user
- `DELETE /api/users/:id`: Delete a specific user
