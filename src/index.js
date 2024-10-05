import React from "react";
import ReactDOM from "react-dom";
import Maskgroup from "./views/maskgroup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./style.css";
import Navbar from "./components/navbar";
import Home from "./views/home";
import DynamicForm from "./views/Webanalyzer";
import Learn from "./views/learn";
import UserDashboard from "./views/user-dashboard";

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
