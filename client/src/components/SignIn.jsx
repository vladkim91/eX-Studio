import React, { useState } from 'react';
import Client from '../store/services';
import { Link } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const result = await Client.post('user/sign_in_manual', {
      username,
      password
    });
  };

  return (
    <div className="signin">
      <div className="s-i-card">
        <h3>Not registered yet?</h3>
        <div className="signin-r-bts">
          <div className="redirect-sign">
            <Link to="/landing">Home</Link>
          </div>
          <div className="redirect-sign">
            <Link to="/register">Register</Link>
          </div>
        </div>

        <h3>Already have an account?</h3>
        <h1>Sign In</h1>
        <div className="separate-s-i-card"></div>
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="s-i-f-input">
            <label htmlFor="username">Username</label>
            <input name="username" id="username" required maxLength={1000} />
          </div>
          <div className="s-i-f-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="p-word"
              required
              maxLength={1000}
            />
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
