import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Company from './components/Company';
import Project from './components/Project';
import UploadDocument from './components/UploadDocument';
import LoginPage from './components/LoginPages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/upload" element={<UploadDocument />} />
      </Routes>
    </Router>
  );
}

export default App;
