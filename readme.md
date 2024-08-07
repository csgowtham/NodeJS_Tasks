
# Node.js File API

This Node.js project demonstrates a simple API using Express to create and list files in a specific folder. The API has two endpoints:

1. Create a file with the current timestamp.
2. Retrieve a list of all files in the specified folder.

## Endpoints

### 1. Create File Endpoint

- **Method:** POST
- **URL:** `/create-file`
- **Description:** Creates a file with the current timestamp in the 'files' folder. The file name is in the format `current-date-time.txt`, and its content is the current timestamp.

**Example Request:**


curl -X POST http://localhost:3000/create-file


### 2. List Files Endpoint

- **Method:** GET
- **URL:** `/list-files`
- **Description:** Retrieves a list of all files in the 'files' folder.

**Example Request:**


curl http://localhost:3000/list-files


## Getting Started

### Prerequisites

- Node.js (v18.18.0 or later)
- npm (v7.0.0 or later)

### Installation

1. Clone the repository:
   
   git clone https://github.com/csgowtham/NodeJS_Tasks.git
   
2. Navigate to the project directory:
   
   cd your-repository
   
3. Install the dependencies:
   
   npm install
   

### Running the Server

Start the server by running:

node index.js


The server will run on `http://localhost:3000`.

## Project Structure


.

├── files

├── index.js

└── README.md


- `files/`: Directory where the generated files will be stored.
- `index.js`: Main file containing the Express server and API endpoints.
- `README.md`: Project documentation.

## Additional Information

### Render URL with Endpoint Details

1. **Create File Endpoint:**
   - Method: POST
   - URL: `http://https://nodejs-task1-file-read-write.onrender.com/create-file`
   - Description: Creates a file with the current timestamp in the 'files' folder.

2. **List Files Endpoint:**
   - Method: GET
   - URL: `http://https://nodejs-task1-file-read-write.onrender.com/list-files`
   - Description: Retrieves a list of all files in the 'files' folder.

### GitHub Repository

GitHub Repository URL: [https://github.com/csgowtham/NodeJS_Tasks.git]


### Last Commit Hash ID

Last Commit Hash ID: `452509939b4faeb4046e7f25a984b65e38fc7ae9`



