# IMF Gadget API

## Project Description
The **IMF Gadget API** is a secure RESTful API built with **Node.js, Express, and PostgreSQL** to manage a gadget inventory for the Impossible Missions Force (IMF). It allows users to add, update, delete, and retrieve gadgets, including a dynamic mission success probability.

## Features
- **Gadget Inventory Management**
  - Retrieve all gadgets with a randomly generated success probability.
  - Add new gadgets with a unique randomly generated codename.
  - Update existing gadgets.
  - Soft delete gadgets by marking them as "Decommissioned" with a timestamp.
- **Self-Destruct Mechanism**
  - Trigger a gadget's self-destruct sequence with a randomly generated confirmation code.


## 🛠️ Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **pg-promise** - PostgreSQL ORM
- **TypeScript** - Strongly typed JavaScript

## 📂 Project Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/imf-gadget-api.git
cd imf-gadget-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=3000
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Database Migrations (If Using Sequelize)
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ Build TypeScript Files
```sh
npm run build
```

### 6️⃣ Start the Server
```sh
npm run dev
```
Server will run at: **http://localhost:3000**

## 📌 API Endpoints
### 🔹 Gadget Inventory
<!-- | Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | `/gadgets` | Get all gadgets with success probability |
| POST   | `/gadgets` | Add a new gadget |
| PATCH  | `/gadgets/:id` | Update an existing gadget |
| DELETE | `/gadgets/:id` | Decommission a gadget |

### 🔹 Self-Destruct
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/gadgets/:id/self-destruct` | Triggers a gadget's self-destruct sequence |
 -->


## 📖 Documentation
API documentation is available in **Postman** or **Swagger**. [Add link here]

## 🚀 Deployment
To deploy the API, use **Heroku, Render, or Railway**.
Example (Heroku):
```sh
git push heroku main
```

## 🛠️ Development Commands
- **Run the server:** `npm run dev`
- **Build TypeScript files:** `npm run build`
- **Lint the code:** `npm run lint`
- **Run tests:** `npm test`



