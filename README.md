# Backend

This folder contains the backend service for the platform.

## Getting Started

### Prerequisites

git init
What you need to install:

- Node.js
- npm (Node Package Manager)

### Installing

Follow these steps to set up your development environment:

1. Clone the repository:

Clone the repository:

```bash
git clone git@github.com:Karadar1/SecondCycle.git
```

2. Navigate to the project directory:

```bash
cd backend
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## API Endpoints

### User Endpoints

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate a user and receive a token.
- **GET /api/users/profile**: Get the profile of the authenticated user.
- **PUT /api/users/profile**: Update the profile of the authenticated user.
- **DELETE /api/users/:id**: Delete a user (admin only).

### Product Endpoints

- **GET /api/products**: Get all products.
- **GET /api/products/:id**: Get a single product by ID.
- **POST /api/products**: Create a new product (seller only).
- **PATCH /api/products/:id**: Update a product by ID (seller only).
- **DELETE /api/products/:id**: Delete a product by ID (seller only).

### Transaction Endpoints

- **GET /api/transactions**: Get all transactions (admin only).
- **GET /api/transactions/:id**: Get a single transaction by ID.
- **POST /api/transactions**: Create a new transaction.
- **PATCH /api/transactions/:id**: Update a transaction by ID.
- **DELETE /api/transactions/:id**: Delete a transaction by ID (admin only).

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
