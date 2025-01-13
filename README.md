
# Basic Application with Micro-Service, CRUD APIs, and Frontend Integration

## Overview
This project implements a basic application with a backend micro-service for mobile number validation, a customer management system (CRUD APIs), and a React-based frontend for integration. It focuses on functionality, not design, and uses Node.js and MongoDB for the backend.

---

## Tasks Breakdown

### **Task 1: Application Implementation**

#### **1.1 Micro-Service for Mobile Number Validation**
- **Functionality:**
  - Validate a given mobile number.
  - If the number is invalid, return an "Invalid Number" response.
  - If valid, return details including country code, country name, and operator name.
- **Sample Request:**
  ```json
  {
    "mobileNumber": "1234567890"
  }
  ```
- **Sample Response:**
  ```json
  {
    "countryCode": "",
    "countryName": "",
    "operatorName": ""
  }
  ```
- **Note:** A third-party API is used for mobile number details, supporting numbers from all countries.

#### **1.2 Add Customer API**
- Adds a new customer with:
  - Name
  - Address
  - Mobile number
- Validates the mobile number using the micro-service from **1.1**.

#### **1.3 Update Customer API**
- Updates customer details by their unique ID.

#### **1.4 Delete Customer API**
- Deletes a customer by their unique ID.

#### **1.5 Get All Customers API**
- Retrieves a list of all customer records.

#### **1.6 Web Page**
- A React-based frontend integrates the following APIs:
  - Add Customer
  - Update Customer
  - Delete Customer
  - Get All Customers


---

## Technology Stack
- **Frontend:** React.js
- **Backend:** Node.js, MongoDB
- **Micro-Service:** Node.js-based service for mobile number validation

---

## Deliverables
1. **Micro-Service:**  
   - Mobile number validation API.
2. **REST APIs:**  
   - Add, Update, Delete, and Get Customer APIs.
3. **Frontend Web Page:**  
   - Integrated with APIs for managing customers.

---


## Task 3: Documentation
- **Code Documentation:**
  - Add comments explaining logic for key functions.
  - Highlight efficient code sections and areas needing improvement.
- **API Documentation:**
  - **Mobile Number Validation API**
    - **Method:** POST  
      **Endpoint:** `/api/validate-number`  
      **Request Body:**  
      ```json
      {
        "mobileNumber": "1234567890"
      }
      ```
      **Response:**  
      ```json
      {
        "countryCode": "",
        "countryName": "",
        "operatorName": ""
      }
      ```
  - **Add Customer API**
    - **Method:** POST  
      **Endpoint:** `/api/customers`  
      **Request Body:**  
      ```json
      {
        "name": "John Doe",
        "address": "123 Main St",
        "mobileNumber": "1234567890"
      }
      ```

---

## Running Instructions

### **Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### **Frontend Setup**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```