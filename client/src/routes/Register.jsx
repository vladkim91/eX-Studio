import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Client from '../store/services';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubError, setFormSubError] = useState('');

  const usernameIsAtLeast3Char = () => {
    return username.length >= 3;
  };

  const passwordHasUpperCaseChar = () => {
    return password.search(/.*[A-Z].*/g) !== -1;
  };

  const passwordHasLowerCaseChar = () => {
    return password.search(/.*[a-z].*/g) !== -1;
  };

  const passwordHasSpecialChar = () => {
    return password.search(/.*[^\c\w].*/g) !== -1;
  };

  const passwordIsAtLeast8Chars = () => {
    return password.length >= 8;
  };

  const passwordsMatch = () => {
    return password === confirmPassword;
  };

  const isPasswordStrongEnough = () => {
    return (
      passwordsMatch() &&
      passwordHasUpperCaseChar() &&
      passwordHasLowerCaseChar() &&
      passwordHasSpecialChar() &&
      passwordIsAtLeast8Chars()
    );
  };

  const handleSubmit = async () => {
    if (!isPasswordStrongEnough()) {
      if (!usernameIsAtLeast3Char()) {
        setFormSubError('*Username must be at least 3 chars long');
      } else if (!passwordHasUpperCaseChar()) {
        setFormSubError('*Password must have at least 1 uppercase character*');
      } else if (!passwordHasLowerCaseChar()) {
        setFormSubError('*Password must have at least 1 lowercase character*');
      } else if (!passwordHasSpecialChar()) {
        setFormSubError('*Password must have special character*');
      } else if (!passwordIsAtLeast8Chars()) {
        setFormSubError('*Password must be at least 8 characters long*');
      } else if (!passwordsMatch()) {
        setFormSubError('*Passwords must match*');
      }
    } else {
      setFormSubError('');
      const result = await Client.post('/user/manual', {
        username,
        password
      });
      console.log('Result');
      console.log(result);
    }
  };

  return (
    <div>
      <div className="custom-shape-divider-top-1642728710">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="rg-card">
        <h3>Alredy Registered?</h3>
        <div className="rg-redirect">
          <Link to={'/sign'}>
            <div className="rg-link">Sign In</div>
          </Link>
          <Link to={'/landing'}>
            <div className="rg-link">Home</div>
          </Link>
        </div>
        <h1>Register</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="s-rg-f-input">
            <label htmlFor="u-name">Username</label>
            <input
              type="text"
              name="u-name"
              id="u-name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              maxLength={1000}
            />
          </div>
          <div className="s-rg-f-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="p-word"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength={1000}
            />
          </div>
          {(password || confirmPassword) && (
            <div className="s-rg-f-input">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="c-p-word"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                maxLength={1000}
              />
            </div>
          )}
          <p style={{ color: 'red', fontSize: '0.8em' }}>{formSubError}</p>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
