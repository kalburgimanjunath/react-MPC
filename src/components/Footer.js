import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <div>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
        <Link to="aboutus">AboutUs</Link>
      </div>
    </div>
  );
}
