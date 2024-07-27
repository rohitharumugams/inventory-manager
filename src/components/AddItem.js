import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [label, setLabel] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const categories = [
    'Stationary',
    'Groceries',
    'Snacks',
    'Electronics',
    'Clothing',
    'Books',
    'Toys',
    'Furniture',
    'Tools',
    'Miscellaneous'
  ];

  const addItem = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const newItem = { name, quantity, price, label };
    try {
      await axios.post('http://localhost:5000/api/items', newItem, config);
      setName('');
      setQuantity('');
      setPrice('');
      setLabel('');
      setSuccessMessage('Item added successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Remove the message after 3 seconds
    } catch (error) {
      console.error('Error adding item:', error);
      // Optionally, handle the error and display an error message
    }
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h1 className="mb-4 text-center heading">Add Item</h1>
      {successMessage && (
        <div className="alert alert-success w-50 text-center">
          {successMessage}
        </div>
      )}
      <div className="card mb-4 shadow" style={{ width: '50%' }}>
        <div className="card-body">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <select
              className="form-control"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={addItem}>
              Add to Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
