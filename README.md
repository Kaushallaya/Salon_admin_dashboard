# Admin Platform for Client Management and Reservations

## Overview

This project consists of two main parts:
- **Client (Frontend)**: Built with React for managing clients, reservations, and dashboard widgets.
- **Server (Backend)**: A Node.js server using Express, MongoDB (via Mongoose), and JWT for authentication.

The platform allows administrators to manage client information, book and manage reservations, and view data visualizations for better decision-making. It also includes key features like email notifications, calendar management, and administrator invitation functionality.

## Features

### Client (Frontend)
- **Technologies**: React, Material UI, Ant Design, FullCalendar, Nivo Charts, Axios, Redux.
- **Widgets**: Pie and Bar charts for displaying reservation data.
- **Calendar Management**: Drag-and-drop functionality for moving reservations.
- **Client Management**: Add, search, and sort clients, as well as send email links.
- **Reservation Management**: Set up client reservations, select available stylists, and manage schedules.
- **Responsive Design**: Built to be mobile-friendly and adaptive to different screen sizes.
  
### Server (Backend)
- **Technologies**: Node.js, Express, Mongoose, bcrypt, JWT, Nodemailer.
- **Authentication**: Uses JWT for secure token-based authentication.
- **Email Notifications**: Sends reminders for reservations via Nodemailer.
- **Database**: MongoDB for storing client and reservation information.
- **APIs**: RESTful APIs for client, reservation, and admin management.

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/your-repo/admin-platform.git
cd admin-platform
```

### Setup Client

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm start
   ```
   
### Setup Server

1. Navigate to the `server` directory:
   ```bash
   cd ../server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file at the root of the `server` directory and add the following:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     EMAIL_USER=your_email_address
     EMAIL_PASS=your_email_password
     ```
4. Start the server:
   ```bash
   npm start
   ```

### Running Both Client and Server

To run both client and server simultaneously, open two terminals:

- In the first terminal, run the client:
  ```bash
  cd client
  npm start
  ```

- In the second terminal, run the server:
  ```bash
  cd server
  npm start
  ```

Both the client (running on `http://localhost:3000`) and server (running on `http://localhost:5000`) will be active.

## API Endpoints

### Client Management
- `POST /api/clients`: Add a new client.
- `GET /api/clients`: Retrieve all clients.
- `PUT /api/clients/:id`: Update a client's information.
- `DELETE /api/clients/:id`: Delete a client.

### Reservation Management
- `POST /api/reservations`: Add a new reservation.
- `GET /api/reservations`: Retrieve all reservations.
- `PUT /api/reservations/:id`: Update a reservation.
- `DELETE /api/reservations/:id`: Delete a reservation.

### Authentication & Admin Management
- `POST /api/admins/register`: Register a new admin.
- `POST /api/admins/login`: Admin login and JWT authentication.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
