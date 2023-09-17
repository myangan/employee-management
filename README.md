# Employee Management

This app has 2 part

Backend has build on GraphQL API, Postgres, Docker, Typescript

Frontend has build on React, Typescript,Apollo GraphQL, Tailwind CSS

before you start you should clone the repo from
https://github.com/myangan/employee-management.git

# Backend

This is a GraphQL API for managing employee data. It provides CRUD (Create, Read, Update, Delete) operations for employee records.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

Docker installed

### Installation

Navigate to the project directory:

```
cd employee-management-backend
```

Install dependencies

```
npm install
```

### Running the Backend

Start the backend (PostgreSQL and GraphQL API) using Docker Compose:

```
docker-compose up --build
```

The PostgreSQL database will run on port 5432, and the GraphQL API will be available at:

```
http://localhost:4000/graphql

```

### API Documentation

For detailed documentation on the GraphQL API schema and available queries and mutations, refer to the GraphQL schema and documentation.

# Frontend

This is the frontend part of the Employee Management project. It provides a user interface for managing employee data.

### Functions

You can add more Employee by pressing add more Employee button

Also you can press anywhere in row to update empolyee details

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js installed

### Installation

Navigate to the project directory:

```
cd employee-management-frontend
```

Install dependencies:

```
npm install
```

## Running the Frontend

Start the frontend application:

```
npm start
```

The application will be available at:

```
http://localhost:3000
```

## Usage

### Accessing the Application

Open a web browser and navigate to:

```
http://localhost:3000
```

You can now use the user interface to manage employee data.
