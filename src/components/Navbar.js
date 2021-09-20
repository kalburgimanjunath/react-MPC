import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <h5>Navbar </h5>
      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
      <Link to="aboutus">AboutUs</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="createedit">Create & Edit</Link>
      <Link to="viewer">Viewer</Link>
      <Link to="rules">Rules</Link>
      <Link to="aboutus">Schedule</Link>
      <Link to="aboutus">Maps</Link>
      <Link to="aboutus">Reports</Link>
      <Link to="aboutus">CRM</Link>
      <Link to="aboutus">Tickets</Link>
      <Link to="aboutus">Viewer</Link>
      <Link to="aboutus">DataViewer</Link>
    </div>
  );
}
