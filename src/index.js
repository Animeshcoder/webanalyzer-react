import React from 'react';
import ReactDOM from 'react-dom';
import Maskgroup from './views/maskgroup';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './style.css';
import Navbar from './components/navbar';
import Home from './views/home';
import DynamicForm from './views/Webanalyzer';
import Learn from './views/learn';
import UserDashboard from './views/user-dashboard';
import Login from './views/Login'; // Add this import
import Register from './views/Register'; // Add this import

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/analyzer" element={<DynamicForm />} />
        <Route path="/report" element={<Maskgroup />} />
        <Route path="/login" element={<Login />} /> {/* Add this route */}
        <Route path="/register" element={<Register />} /> {/* Add this route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
