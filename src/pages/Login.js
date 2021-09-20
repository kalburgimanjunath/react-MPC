import React from 'react';
import InputBox from '../components/InputBox';
export default function Login() {
  return (
    <div>
      <h1>Login </h1>
      <form action="./dashboard">
        <div className="login">
          <InputBox type="input" subtype="text" label="username" />
          <InputBox type="input" subtype="hidden" label="password" />
          <div>
            <div className="form-check">
              <label className="form-check-label">
                Do you want to save your password
              </label>
              <input
                type="checkbox"
                name="username"
                id="username"
                className="form-check-input"
              />
            </div>
            <input type="submit" value="Login" className="btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
