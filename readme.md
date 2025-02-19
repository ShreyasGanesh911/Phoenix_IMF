# IMF Gadget API

## Project Description
The **IMF Gadget API** is a RESTful API built with **Node.js, Express, and PostgreSQL** to manage a gadget inventory for the Impossible Missions Force (IMF). It allows users to add, update, delete, and retrieve gadgets, including a dynamic mission success probability.

## Features
- **Gadget Inventory Management**
  - Retrieve all gadgets with a success probability.
  - Add new gadgets with a randomly generated codename.
  - Update existing gadgets.
  - Soft delete gadgets by marking them as "Decommissioned" with a timestamp.
- **Self-Destruct Mechanism**
  - Trigger a gadget's self-destruct sequence with a randomly generated confirmation code.


## 🛠️ Tech Stack
- **Node.js** 
- **Express.js** 
- **PostgreSQL** 
- **pg-promise** - PostgreSQL ORM
- **TypeScript**  

## 📂 Project Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ShreyasGanesh911/Phoenix_IMF
cd Phoenix_IMF
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
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
  * GET /gadgets --> Get all gadgets
  * GET /gadgets?status=status --> Get gadgets by status
  * POST /gadgets --> Create a new gadget
  * PATCH /gadgets --> Update a gadget
  * DELETE /gadgets --> Decommission a gadget
  * POST /gadgets/:id/self-destruct --> Self-destruct a gadget

## 📖 Documentation
API documentation is available in [**Postman**](https://documenter.getpostman.com/view/30026806/2sAYdZtZTN)


## 🛠️ Development Commands
- **Run the server:** `npm run dev`
- **Build TypeScript files:** `npm run build`




