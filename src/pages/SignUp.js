import React from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <div className="signup">
          <div className="form-control">
            <label>Username:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-control">
            <label>Password:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div className="form-control">
            <label>Display Name:</label>
            <input type="text" name="dname" id="dname" />
          </div>
          <div className="form-control">
            <label>Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-control">
            <label>Upload photo:</label>
            <input type="file" name="file" id="file" />
          </div>
          <div>
            <div className="form-control">
              <label>Agree Terms and conditions:</label>
              <input type="checkbox" name="username" id="username" />
            </div>
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
            <button className="btn-default">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
