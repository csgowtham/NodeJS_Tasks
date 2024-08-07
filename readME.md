
# Hall Booking API

## Overview

This is a Node.js application for a Hall Booking System. The API allows users to manage rooms and bookings, including creating rooms, booking rooms, and retrieving booking and room information.

## Features

- **Create a Room**: Add a new room with details such as number of seats, amenities, and price per hour.
- **Book a Room**: Reserve a room for a specific date and time.
- **List All Rooms**: Retrieve information about all rooms along with their booking data.
- **List All Customers**: Get a list of all customers with their booking details.
- **Customer Booking History**: View the booking history of a specific customer.

## Endpoints

### 1. Create a Room

- **URL**: `/rooms`
- **Method**: `POST`
- **Request Body**:
  json
  {
    "numberOfSeats": 20,
    "amenities": ["Projector", "Whiteboard"],
    "pricePerHour": 50
  }
  
- **Response**:
  json
  {
    "id": 1,
    "numberOfSeats": 20,
    "amenities": ["Projector", "Whiteboard"],
    "pricePerHour": 50,
    "bookings": []
  }
  

### 2. Book a Room

- **URL**: `/bookings`
- **Method**: `POST`
- **Request Body**:
  json
  {
    "customerName": "John Doe",
    "date": "2024-08-07",
    "startTime": "14:30",
    "endTime": "15:30",
    "roomId": 1
  }
  
- **Response**:
  json
  {
    "id": 1,
    "customerName": "John Doe",
    "date": "2024-08-07",
    "startTime": "14:30",
    "endTime": "15:30",
    "roomId": 1,
    "bookingDate": "2024-08-07T12:00:00Z"
  }
  

### 3. List All Rooms

- **URL**: `/rooms`
- **Method**: `GET`
- **Response**:
  json
  [
    {
      "id": 1,
      "numberOfSeats": 20,
      "amenities": ["Projector", "Whiteboard"],
      "pricePerHour": 50,
      "bookings": [
        {
          "id": 1,
          "customerName": "John Doe",
          "date": "2024-08-07",
          "startTime": "14:30",
          "endTime": "15:30"
        }
      ]
    }
  ]
  

### 4. List All Customers

- **URL**: `/customers`
- **Method**: `GET`
- **Response**:
  json
  [
    {
      "customerName": "John Doe",
      "roomName": "Room 1",
      "date": "2024-08-07",
      "startTime": "14:30",
      "endTime": "15:30"
    }
  ]
  

### 5. Customer Booking History

- **URL**: `/customers/:customerName/bookings`
- **Method**: `GET`
- **Response**:
  json
  [
    {
      "id": 1,
      "customerName": "John Doe",
      "date": "2024-08-07",
      "startTime": "14:30",
      "endTime": "15:30",
      "roomId": 1,
      "bookingDate": "2024-08-07T12:00:00Z"
    }
  ]
  

## Running the Application

1. **Clone the Repository**:
   
   git clone https://github.com/csgowtham/NodeJS_Tasks.git
   cd NodeJS_Tasks
   

2. **Install Dependencies**:
   
   npm install
   

3. **Start the Server**:
   
   node index.js
   

4. **Access the API**:
   The server will be running at `https://hall-booking-api-9fms.onrender.com`.

## API Documentation

API documentation can be found in the Postman collection. Please refer to the [Postman Documentation](https://documenter.getpostman.com/view/28157450/2sA3rzLYS9) for detailed information on API usage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Node.js
- Express

