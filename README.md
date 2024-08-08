# Mentor and Student Assigning System

## Project Overview

This project allows for assigning students to mentors, updating mentor-student relationships, and retrieving information about students and mentors. The back-end is built with Node.js and MongoDB Atlas.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and connection string

### Installation

1. **Clone the repository:**

   
   git clone https://github.com/csgowtham/NodeJS_Tasks.git
   cd mentor-student-system
   git checkout mentor-student
   
   

2. **Install dependencies:**

   
   npm install
   

3. **Create a `.env` file:**

   
   touch .env
   

   Add the following environment variables to the `.env` file:

   env
   PORT=5000
   

4. **Start the server:**

   
   npm start
   

   The server will be running on `http://localhost:5000`.

## API Endpoints

### 1. Create a Mentor

- **URL:** `/api/mentors`
- **Method:** `POST`
- **Body (JSON):**

  json
  {
    "name": "John Doe"
  }
  

- **Success Response:**
  - **Code:** 201
  - **Content:**

    json
    {
      "_id": "60c72b2f8c2d4a3c8c8b4567",
      "name": "John Doe",
      "students": []
    }
    

### 2. Create a Student

- **URL:** `/api/students`
- **Method:** `POST`
- **Body (JSON):**

  json
  {
    "name": "Gowtham C S",
    "email": "gowtham@example.com",
    "mentor": null,
    "previousMentors": []
  }
  

- **Success Response:**
  - **Code:** 201
  - **Content:**

    json
    {
      "_id": "60c72b2f8c2d4a3c8c8b4568",
      "name": "Gowtham C S",
      "email": "gowtham@example.com",
      "mentor": null,
      "previousMentors": []
    }
    

### 3. Assign Students to Mentor

- **URL:** `/api/mentors/assign`
- **Method:** `PUT`
- **Body (JSON):**

  json
  {
    "mentorId": "60c72b2f8c2d4a3c8c8b4567",
    "studentIds": ["60c72b2f8c2d4a3c8c8b4568"]
  }
  

- **Success Response:**
  - **Code:** 200
  - **Content:**

    json
    {
      "_id": "60c72b2f8c2d4a3c8c8b4567",
      "name": "John Doe",
      "students": ["60c72b2f8c2d4a3c8c8b4568"]
    }
    

- **Error Response:**
  - **Code:** 400
  - **Content:**

    json
    {
      "message": "Some students already have a mentor",
      "studentsWithMentor": ["60c72b2f8c2d4a3c8c8b4568"]
    }
    

### 4. Assign or Change Mentor for a Student

- **URL:** `/api/students/assign`
- **Method:** `PUT`
- **Body (JSON):**

  json
  {
    "studentId": "60c72b2f8c2d4a3c8c8b4568",
    "mentorId": "60c72b2f8c2d4a3c8c8b4567"
  }
  

- **Success Response:**
  - **Code:** 200
  - **Content:**

    json
    {
      "_id": "60c72b2f8c2d4a3c8c8b4568",
      "name": "Gowtham C S",
      "email": "gowtham@example.com",
      "mentor": "60c72b2f8c2d4a3c8c8b4567",
      "previousMentors": []
    }
    

### 5. Get All Students for a Particular Mentor

- **URL:** `/api/mentors/:mentorId/students`
- **Method:** `GET`

- **Success Response:**
  - **Code:** 200
  - **Content:**

    json
    [
      {
        "_id": "60c72b2f8c2d4a3c8c8b4568",
        "name": "Gowtham C S",
        "email": "gowtham@example.com",
        "mentor": "60c72b2f8c2d4a3c8c8b4567",
        "previousMentors": []
      }
    ]
    

### 6. Get Previously Assigned Mentor for a Student

- **URL:** `/api/students/:studentId/previousMentor`
- **Method:** `GET`

- **Success Response:**
  - **Code:** 200
  - **Content:**

    json
    {
      "previousMentors": [
        "60c72b2f8c2d4a3c8c8b4567"
      ]
    }
    

## Postman Documentation

You can import the Postman collection to test the API endpoints:

1. **Download Postman Collection:**
   - [Download Postman Collection](https://documenter.getpostman.com/view/28157450/2sA3s1mrPs)

2. **Import into Postman:**
   - Open Postman.
   - Click on "Import" in the top left corner.
   - Upload the downloaded collection file or use the provided link.

3. **Run the Collection:**
   - Once imported, you can run the collection to test all endpoints with predefined data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [csgowtham@gmail.com](mailto:csgowtham73@gmail.com).

