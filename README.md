# Node.js MongoDB Contacts API

This project is a modern **RESTful API** developed using **Node.js**, **Express.js**, and **MongoDB**. It offers advanced features for contact management, including authentication, CRUD operations, pagination, sorting, and filtering. The project runs with **Bun** and is structured according to best practices.

---

## Features

- **Authentication**: Secure user sessions with JWT and password hashing.
- **Contact Management**: Add, list, update, and delete contacts (CRUD).
- **MongoDB Integration**: Schema-based data modeling with **Mongoose**.
- **Validation**: User and contact data validation with **Joi**.
- **Pagination, Sorting, Filtering**: Advanced query support for contact lists.
- **Error Handling**: Centralized error management and custom error messages.
- **Environment Variables**: Configuration via `.env` file.
- **Logging**: Fast and structured logging with **Pino**.
- **Modern Development**: Fast runtime and dependency management with **Bun**.

---

## Requirements

- **Node.js**: v16 or higher
- **MongoDB**: Atlas or local installation
- **Bun**: [Installation guide](https://bun.sh/)

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nodejs-hw-mongodb.git
   cd nodejs-hw-mongodb
   ```

2. **Install Dependencies:**

   ```bash
   bun install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the project root and enter the following variables:

   ```env
   PORT=3000
   MONGODB_USER=your_mongodb_user
   MONGODB_PASSWORD=your_mongodb_password
   MONGODB_URL=your_mongodb_cluster_url
   MONGODB_DB=your_database_name
   ```

4. **Start the Server:**
   - Production:
     ```bash
     bun run start
     ```
   - Development (with hot-reload):
     ```bash
     bun run dev
     ```

---

## API Endpoints

### Base URL

```
http://localhost:<PORT>
```

### Authentication (`/auth`)

- **POST /auth/register**  
  Register a new user.

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```

  Response: `201 Created`

- **POST /auth/login**  
  Login and receive an access token.

  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```

  Response: `200 OK` (returns access token)

- **POST /auth/logout**  
  Logout, requires access token.

  ```
  Authorization: Bearer <accessToken>
  ```

  Response: `204 No Content`

- **POST /auth/refresh**  
  Obtain a new access token using the refresh token.
  Response: `200 OK`

---

### Contact Operations (`/contacts`)

- **GET /contacts**  
  Retrieve the contact list with pagination, sorting, and filtering.

  - Query parameters: `page`, `perPage`, `sortBy`, `sortOrder`, `type`, `isFavourite`
  - Header: `Authorization: Bearer <accessToken>`
  - Response: `200 OK`

- **GET /contacts/:contactId**  
  Retrieve a specific contact.

  - Header: `Authorization: Bearer <accessToken>`
  - Response: `200 OK` or `404 Not Found`

- **POST /contacts**  
  Add a new contact.

  ```json
  {
    "name": "Jane Doe",
    "phoneNumber": "1234567890",
    "email": "jane.doe@example.com",
    "isFavourite": true,
    "contactType": "work"
  }
  ```

  - Header: `Authorization: Bearer <accessToken>`
  - Response: `201 Created`

- **PATCH /contacts/:contactId**  
  Update a contact.

  ```json
  {
    "name": "Jane Smith",
    "isFavourite": false
  }
  ```

  - Header: `Authorization: Bearer <accessToken>`
  - Response: `200 OK` or `404 Not Found`

- **DELETE /contacts/:contactId**  
  Delete a contact.
  - Header: `Authorization: Bearer <accessToken>`
  - Response: `200 OK` or `404 Not Found`

---

## Validation Rules

### User

- **Register**:
  - `name`: Required string, 3-30 characters
  - `email`: Valid email, required
  - `password`: Required string, 6-30 characters
- **Login**:
  - `email`: Valid email, required
  - `password`: Required string, 6-30 characters

### Contact

- **Create**:
  - `name`: Required string, 3-20 characters
  - `phoneNumber`: Required string, 10 digits, cannot start with 0
  - `email`: Valid email, required
  - `isFavourite`: Boolean, required
  - `contactType`: `personal`, `work`, `home` (enum), required
- **Update**:
  - All fields optional, must comply with the above rules

---

## Project Structure

```
src/
├── controllers/       # Route handlers
├── db/                # Database connection and models
├── middlewares/       # Custom middlewares
├── routers/           # API routes
├── services/          # Business logic
├── utils/             # Utility functions
└── index.js           # Entry point
```

---

## Development

### Lint

```bash
bun run lint
```

### Format

```bash
bun run format
```

---

## Test

```bash
bun run test
```

---

## Notes

- The project offers a fast and modern development experience with **Bun**.
- All models are defined using **Mongoose**.
- The codebase is designed for scalability and maintainability.
- Error handling and logging are managed centrally.
- Advanced API features make it suitable for real-world applications.
