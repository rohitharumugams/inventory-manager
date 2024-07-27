import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      const res = await axios.get('http://localhost:5000/api/items', config);
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const deleteItem = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`, config);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h1 className="mb-4 text-center heading"> Inventory Table</h1>
      <div className="table-responsive w-75">
        <table className="table table-striped shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price (₹)</th>
              <th scope="col">Label</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>{item.label}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewItems;
