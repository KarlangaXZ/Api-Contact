# Phonebook API and UI

This project is a phonebook management system built with TypeScript, Node.js, Express.js, and a simple HTML frontend. It allows users to manage a list of contacts, with options to add, update, delete, and filter through the contacts. The API serves as the backend, while the HTML/TypeScript frontend provides an interactive user interface.

## Features

- **API Endpoints**:
  - `GET /api/contacts`: Retrieve all contacts.
  - `GET /api/contacts/:id`: Retrieve a specific contact by ID.
  - `POST /api/contacts`: Add a new contact.
  - `PUT /api/contacts/:id`: Update an existing contact by ID.
  - `DELETE /api/contacts/:id`: Delete a contact by ID.
  - `GET /api/contacts/filter/:name`: Filter contacts by name.

- **Frontend**:
  - Display contacts in a table.
  - Add new contacts through a form.
  - Edit and update existing contacts.
  - Delete contacts directly from the table.
  
## Technologies Used

- **Backend**: Node.js, Express.js, TypeScript
- **Frontend**: HTML, BootStrap, Tailwind, TypeScript
- **API Testing**: Postman or any API client

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/phonebook-api.git
   
2. **Install dependencies**:
   ```cd phonebook-api
      npm install dev
   
3. **Run the API**:
   ```npm run dev
   This will start the API on `http://localhost:4224`

