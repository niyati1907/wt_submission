# Laptop Management Project

This project is a web application built with React.js for the frontend and Node.js/Express for the backend, designed to perform CRUD (Create, Read, Update, Delete) operations on laptop data.

## Features

- **Add a Laptop:** Add a new laptop entry with details such as name, image, RAM, HD, processor, graphics card, and price.
- **View Laptops:** View the list of all laptops with detailed information.
- **Update Laptop:** Edit existing laptop details.
- **Delete Laptop:** Remove a laptop entry from the system.

## Tech Stack

### Frontend
- React.js
- Bootstrap for UI styling

### Backend
- Node.js
- Express.js
- MongoDB for database

### Other Tools
- Axios for making HTTP requests
- Mongoose for MongoDB object modeling

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/laptop-management.git
    cd laptop-management
    ```

2. Install dependencies for both frontend and backend:

    - Install backend dependencies:

      ```bash
      cd backend
      npm install
      ```

    - Install frontend dependencies:

      ```bash
      cd ../frontend
      npm install
      ```

3. Set up MongoDB:

    Make sure MongoDB is running locally or provide a MongoDB URI in the `.env` file for the backend.

4. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

5. Start the frontend development server:

    ```bash
    cd ../frontend
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## API Endpoints (Backend)

### Base URL: `http://localhost:8888/`

- **GET** `/Laptop` - Fetch all laptops
- **POST** `/Laptop` - Add a new laptop
- **GET** `/Laptop/:id` - Fetch laptop details by ID
- **PUT** `/Laptop/:id` - Update laptop details by ID
- **DELETE** `/Laptop/:id` - Delete laptop by ID

## Usage

### Adding a Laptop

1. Navigate to the **Add Laptop** form on the frontend.
2. Enter details such as laptop name, image URL, RAM, HD, processor, graphics card, and price.
3. Click on **Submit** to add the laptop.

### Viewing Laptops

1. Go to the **Laptops** (Home Page in Nav bar) page to view a list of all laptops.
2. Each laptop card contains an **Edit** and **Delete** button for respective operations.

### Editing a Laptop

1. Click **Edit** on the laptop you want to update.
2. Modify the necessary details.
3. Click **Submit** to update the laptop.

### Deleting a Laptop

1. Click **Delete** on the laptop you want to remove.
2. Confirm deletion.

## Screenshots

_Include relevant screenshots of the app for better understanding._

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
