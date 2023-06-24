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
      <div className="login-page-title">
      <h2 className="login-header">Login</h2>
      <h5 className="login-header-subtext">Welcome back!</h5>
      </div>
      <div className='login-from'>
      <form onSubmit={handleSubmit} className="login-form">
      <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder="E-mail"
                required 
                className="input-field"
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password"
                required 
                className="input-field"
            />
            <button type="submit" className="submit-button">Log in</button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
