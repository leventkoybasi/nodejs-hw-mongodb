# Node.js Homework: MongoDB Contacts API

This project is a Node.js-based RESTful API for managing contacts, built with Express.js and MongoDB. It supports CRUD operations for contacts and includes features like error handling, environment configuration, and database connection.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **MongoDB Integration**: Uses Mongoose for database modeling and interaction.
- **Error Handling**: Centralized error handling with custom middlewares.
- **Environment Configuration**: Uses `dotenv` for managing environment variables.
- **Logging**: Integrated with `pino-http` for structured logging.
- **Validation**: Includes schema validation for contact data using `Joi`.
- **Utility Functions**: Includes reusable utilities like `readData`, `writeData`, and `createFakeContact`.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas or a local MongoDB instance
- `bun` (optional, for running scripts)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-hw-mongodb.git
   cd nodejs-hw-mongodb
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   MONGODB_USER=your_mongodb_user
   MONGODB_PASSWORD=your_mongodb_password
   MONGODB_URL=your_mongodb_cluster_url
   MONGODB_DB=your_database_name
   ```

4. Start the server:

   ```bash
   bun run start
   ```

   Alternatively, for development with hot-reloading:

   ```bash
   bun run dev
   ```

## API Endpoints

### Base URL

```
http://localhost:<PORT>/contacts
```

### Endpoints

- **GET /contacts**: Retrieve all contacts.
- **GET /contacts/:contactId**: Retrieve a contact by ID.
- **POST /contacts**: Create a new contact.
- **PATCH /contacts/:contactId**: Update a contact by ID.
- **DELETE /contacts/:contactId**: Delete a contact by ID.

### Example Request

#### Create a Contact

```bash
curl -X POST http://localhost:3000/contacts \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "phoneNumber": "1234567890",
  "email": "john.doe@example.com",
  "isFavourite": true,
  "contactType": "work"
}'
```

## Validation

The project uses `Joi` for schema validation. Below are the validation schemas:

- **Create Contact Schema**:

  - `name`: String, 3-20 characters, required.
  - `phoneNumber`: String, 10 digits, cannot start with 0, required.
  - `email`: Valid email, required.
  - `isFavourite`: Boolean, required.
  - `contactType`: Enum (`personal`, `work`, `other`), required.

- **Update Contact Schema**:
  - Same fields as the create schema, but all are optional.

## Middleware

- **`ctrlWrapper`**: Wraps controllers to handle errors using `try-catch`.
- **`isValidId`**: Validates MongoDB Object IDs.
- **`validateBody`**: Validates request bodies against `Joi` schemas.
- **`notFoundHandler`**: Handles 404 errors.
- **`errorHandler`**: Handles general and HTTP-specific errors.

## Utility Functions

- **`readData`**: Reads and parses JSON data from a file.
- **`writeData`**: Writes JSON data to a file.
- **`createFakeContact`**: Generates a fake contact using `@faker-js/faker`.

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

## License

This project is licensed under the MIT License. See the LICENSE file for details.
