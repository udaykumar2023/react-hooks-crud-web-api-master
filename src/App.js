import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/tutorials" className="navbar-brand">
          CCPA
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/contacts"} className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add alternate contacts
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList/>} />
          <Route path="/contacts" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/contacts/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;