// src/components/Company.js
import React from 'react';

function Company() {
  return (
    <div>
      <h1>Companies</h1>
    </div>
  );
}

export default Company;

// server/routes/companies.js
const express = require('express');
const router = express.Router();

// GET /api/companies - Get all companies
router.get('/', (req, res) => {
  res.json([
    {
      _id: '1',
      name: 'Test Company',
      projects: [
        { _id: '1', name: 'Project 1', status: 'completed' },
        { _id: '2', name: 'Project 2', status: 'ongoing' },
        { _id: '3', name: 'Project 3', status: 'pending' }
      ]
    }
  ]);
});

module.exports = router;
