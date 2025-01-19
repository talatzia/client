import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/companies');
        setCompanies(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h1>Dashboard</h1>
        {companies.map(company => (
          <div key={company._id}>
            <h2>{company.name}</h2>
            <ul>
              {company.projects?.map(project => (
                <li key={project._id} style={{ color: getStatusColor(project.status) }}>
                  {project.name} - {project.status}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

function getStatusColor(status) {
  const colors = {
    completed: 'green',
    ongoing: 'yellow',
    pending: 'red'
  };
  return colors[status] || 'black';
}

export default Dashboard;