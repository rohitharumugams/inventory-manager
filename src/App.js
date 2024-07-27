import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import Analyze from './components/Analyze';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Inventory Manager</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/view">View</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/analyze">Analyze</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container full-height">
          <Routes>
            <Route path="/" element={<AddItem />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/view" element={<ViewItems />} />
            <Route path="/analyze" element={<Analyze />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
