import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analyze = () => {
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

  const categories = [
    'Stationary',
    'Groceries',
    'Snacks',
    'Miscellaneous',
    'Electronics',
    'Clothing',
    'Books',
    'Toys',
    'Furniture',
    'Tools'
  ];

  const quantities = categories.map(category => {
    return items.filter(item => item.label === category).reduce((sum, item) => sum + item.quantity, 0);
  });

  const costs = categories.map(category => {
    return items.filter(item => item.label === category).reduce((sum, item) => sum + (item.quantity * item.price), 0);
  });

  const quantityData = {
    labels: categories,
    datasets: [
      {
        label: 'Quantity',
        data: quantities,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
          'rgba(83, 102, 255, 0.2)',
          'rgba(255, 83, 64, 0.2)',
          'rgba(173, 255, 47, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(255, 83, 64, 1)',
          'rgba(173, 255, 47, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const costData = {
    labels: categories,
    datasets: [
      {
        label: 'Cost (₹)',
        data: costs,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
          'rgba(83, 102, 255, 0.2)',
          'rgba(255, 83, 64, 0.2)',
          'rgba(173, 255, 47, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(255, 83, 64, 1)',
          'rgba(173, 255, 47, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h2 className="mb-4 text-center heading">Inventory Distribution</h2>
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h3 className="text-center subheading">Quantity</h3>
          <div className="card shadow p-3 mb-5 bg-dark rounded w-100">
            <Pie data={quantityData} />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h3 className="text-center subheading">Cost</h3>
          <div className="card shadow p-3 mb-5 bg-dark rounded w-100">
            <Pie data={costData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
