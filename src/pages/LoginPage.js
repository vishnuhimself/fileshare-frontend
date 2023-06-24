import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    // Here is where we'd send a request to the backend
    console.log(username, password);
  }

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="input-field"/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="input-field"/>
        </label>
        <button type="submit" className="submit-button">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
