# Inventory Management System

The Inventory Management System is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to add, view, and analyze inventory items efficiently. The application features an intuitive interface built with Bootstrap for a responsive and visually appealing design. Users can manage inventory items by specifying details such as name, quantity, price, and category. The system also provides analytical insights through graphical representations of inventory distribution.

## Features

- Add new inventory items with details such as name, quantity, price, and category.
- View all inventory items in a tabular format.
- Analyze inventory distribution with graphical representations.
- Authentication and authorization using JWT.
- Responsive design using Bootstrap.

## Technologies Used

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Developer Tools:** VS Code, GitHub, Postman

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rohitharumugams/inventory-management-system.git
   cd inventory-management-system
   ```

2. Install dependencies for both the client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   cd server
   node server.js
   ```

5. Start the frontend server:

   ```bash
   cd client
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Add Items**:

   - Navigate to the "Add" page.
   - Fill in the item details and click "Add to Inventory".
   - A success message will be displayed upon successful addition.

2. **View Items**:

   - Navigate to the "View" page.
   - View all inventory items in a tabular format.
   - Delete items if necessary.

3. **Analyze Inventory**:
   - Navigate to the "Analyze" page.
   - View graphical representations of inventory distribution by quantity and cost.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.
