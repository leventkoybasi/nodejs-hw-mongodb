# Node.js MongoDB Contacts API

This project is a **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB**. It provides a robust solution for managing contacts, including features like authentication, CRUD operations, pagination, sorting, and filtering. The project is designed with modern best practices and uses **Bun** as the runtime and package manager for improved performance and developer experience.

---

## Features

- **Authentication**: Secure user authentication with hashed passwords and session management.
- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **MongoDB Integration**: Uses **Mongoose** for schema modeling and database interaction.
- **Validation**: Input validation using **Joi** for both user and contact data.
- **Pagination, Sorting, and Filtering**: Supports advanced query capabilities for contact lists.
- **Error Handling**: Centralized error handling with custom middlewares.
- **Environment Configuration**: Uses `.env` for managing environment variables.
- **Logging**: Integrated with **Pino** for structured and efficient logging.
- **Modern Development Workflow**: Built with **Bun** for faster runtime and dependency management.

---

## Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Atlas or a local MongoDB instance
- **Bun**: Installed as the runtime and package manager ([Install Bun](https://bun.sh/))

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/nodejs-hw-mongodb.git
   cd nodejs-hw-mongodb
   ```

2. **Install Dependencies**:

   ```bash
   bun install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   MONGODB_USER=your_mongodb_user
   MONGODB_PASSWORD=your_mongodb_password
   MONGODB_URL=your_mongodb_cluster_url
   MONGODB_DB=your_database_name
   ```

4. **Run the Server**:
   - For production:
     ```bash
     bun run start
     ```
   - For development with hot-reloading:
     ```bash
     bun run dev
     ```

---

## API Endpoints

### Base URL

```
http://localhost:<PORT>
```

### Authentication Routes (`/auth`)

1. **POST /auth/register**  
   **Description**: Registers a new user.  
   **Request Body**:

   ```json
   {
     "name": "John Doe",
     "email": "john.doe@example.com",
     "password": "securepassword"
   }
   ```

   **Response**:

   - `201 Created`: User successfully registered.

2. **POST /auth/login**  
   **Description**: Logs in a user and returns an access token.  
   **Request Body**:

   ```json
   {
     "email": "john.doe@example.com",
     "password": "securepassword"
   }
   ```

   **Response**:

   - `200 OK`: Returns an access token.

3. **POST /auth/logout**  
   **Description**: Logs out the user by invalidating the session.  
   **Headers**:

   ```text
   Authorization: Bearer <accessToken>
   ```

   **Response**:

   - `204 No Content`: User successfully logged out.

4. **POST /auth/refresh**  
   **Description**: Refreshes the access token using the refresh token.  
   **Response**:
   - `200 OK`: Returns a new access token.

---

### Contact Routes (`/contacts`)

1. **GET /contacts**  
   **Description**: Retrieves a paginated, sorted, and filtered list of contacts.  
   **Query Parameters**:

   - `page`: Page number (default: `1`)
   - `perPage`: Number of items per page (default: `10`)
   - `sortBy`: Field to sort by (e.g., `name`, `email`)
   - `sortOrder`: Sorting order (`asc` or `desc`)
   - `type`: Filter by contact type (`work`, `personal`, `home`)
   - `isFavourite`: Filter by favorite status (`true` or `false`)  
     **Headers**:

   ```text
   Authorization: Bearer <accessToken>
   ```

   **Response**:

   - `200 OK`: Returns a list of contacts.

2. **GET /contacts/:contactId**  
   **Description**: Retrieves a specific contact by its ID.  
   **Headers**:

   ```text
   Authorization: Bearer <accessToken>
   ```

   **Response**:

   - `200 OK`: Returns the contact details.
   - `404 Not Found`: Contact not found.

3. **POST /contacts**  
   **Description**: Creates a new contact.  
   **Request Body**:

   ```json
   {
     "name": "Jane Doe",
     "phoneNumber": "1234567890",
     "email": "jane.doe@example.com",
     "isFavourite": true,
     "contactType": "work"
   }
   ```

   **Headers**:

   ```text
   Authorization: Bearer <accessToken>
   ```

   **Response**:

   - `201 Created`: Contact successfully created.

4. **PATCH /contacts/:contactId**  
   **Description**: Updates an existing contact.  
   **Request Body**:

   ```json
   {
     "name": "Jane Smith",
     "isFavourite": false
   }
   ```

   **Headers**:

   ```text
   Authorization: Bearer <accessToken>
   ```

   **Response**:

   - `200 OK`: Contact successfully updated.
   - `404 Not Found`: Contact not found.

5. **DELETE /contacts/:contactId**  
   **Description**: Deletes a contact by its ID.  
   **Headers**:
   ```text
   Authorization: Bearer <accessToken>
   ```
   **Response**:
   - `200 OK`: Contact successfully deleted.
   - `404 Not Found`: Contact not found.

---

## Validation

### User Validation

- **Register**:
  - `name`: String, 3-30 characters, required.
  - `email`: Valid email, required.
  - `password`: String, 6-30 characters, required.
- **Login**:
  - `email`: Valid email, required.
  - `password`: String, 6-30 characters, required.

### Contact Validation

- **Create**:
  - `name`: String, 3-20 characters, required.
  - `phoneNumber`: String, 10 digits, cannot start with 0, required.
  - `email`: Valid email, required.
  - `isFavourite`: Boolean, required.
  - `contactType`: Enum (`personal`, `work`, `home`), required.
- **Update**:
  - Same fields as create, but all are optional.

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

### Linting

Run ESLint to check for code quality:

```bash
bun run lint
```

### Formatting

Use Prettier for consistent code formatting:

```bash
bun run format
```

---

## Testing

Run tests using `bun`:

```bash
bun run test
```

---

## Notes

- This project uses **Bun** for faster runtime and dependency management.
- MongoDB is used as the database, and all models are defined using **Mongoose**.
- The project is designed with scalability and maintainability in mind, following modern best practices.
