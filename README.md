# Node.js MongoDB Contacts API

Welcome to the **Node.js MongoDB Contacts API** project! This project is a RESTful API built with Node.js and Express, leveraging MongoDB for data storage. The API allows you to manage a collection of contacts, providing endpoints to create, read, update, and delete contact information.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **Express Framework**: Fast and minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing contact information.
- **Environment Configuration**: Manage configuration using dotenv.
- **Logging**: HTTP request logging with Pino.
- **CORS**: Cross-Origin Resource Sharing enabled.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Atlas or local instance)
- [Bun](https://bun.sh/) (for running scripts)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/leventkoybasi/nodejs-hw-mongodb.git
   cd nodejs-hw-mongodb
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Set up environment variables**:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in the required environment variables in the `.env` file.

### Running the Application

#### Development

To run the application in development mode with hot-reloading:

```bash
bun run dev
```

#### Production

To run the application in production mode:

```bash
bun run start
```

### API Endpoints

- **GET /contacts**: Retrieve all contacts.
- **GET /contacts/:id**: Retrieve a contact by ID.
- **POST /contacts**: Create a new contact.
- **PUT /contacts/:id**: Update a contact by ID.
- **DELETE /contacts/:id**: Delete a contact by ID.

### Deployment

This project is deployed using [Render](https://render.com/). Follow these steps to deploy your own instance:

1. **Create a new Web Service** on Render.
2. **Connect your GitHub repository** to Render.
3. **Set environment variables** in the Render dashboard.
4. **Deploy the service**.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any inquiries or issues, please contact [Levent Koybasi](mailto:leventkoybasi@example.com).

---

Thank you for using the Node.js MongoDB Contacts API! We hope it serves your needs well.
