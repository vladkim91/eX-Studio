import React, { useState } from 'react';
import Client from '../store/services';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubError, setFormSubError] = useState('');

  const hasUpperCaseChar = () => {
    return password.search(/.*[A-Z].*/g) !== -1;
  };

  const hasLowerCaseChar = () => {
    return password.search(/.*[a-z].*/g) !== -1;
  };

  const hasSpecialChar = () => {
    return password.search(/.*[^\c\w].*/g) !== -1;
  };

  const isAtLeast8Chars = () => {
    return password.length >= 8;
  };

  const passwordsMatch = () => {
    return password === confirmPassword;
  };

  const isPasswordStrongEnough = () => {
    return (
      passwordsMatch() &&
      hasUpperCaseChar() &&
      hasLowerCaseChar() &&
      hasSpecialChar() &&
      isAtLeast8Chars()
    );
  };

  const handleSubmit = () => {
    // if (!isPasswordStrongEnough()) {
    //   if (!hasUpperCaseChar()) {
    //     setFormSubError('Password must have at least 1 uppercase character!');
    //   } else if (!hasLowerCaseChar()) {
    //     setFormSubError('Password must have at least 1 lowercase character!');
    //   } else if (!hasSpecialChar()) {
    //     setFormSubError('Password must have special character');
    //   } else if (!isAtLeast8Chars()) {
    //     setFormSubError('Password must be at least 8 characters long');
    //   } else if (!passwordsMatch()) {
    //     setFormSubError('Passwords must match!');
    //   }
    // } else {
    //   setFormSubError('');
    // }
  };

  return (
    <div className="signin">
      <div className="s-i-card">
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
            <input
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="s-i-f-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="p-word"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {(password || confirmPassword) && (
            <div className="s-i-f-input">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="c-p-word"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <p style={{ margin: '1em', fontSize: '0.8em', color: 'red' }}>
            {formSubError}
          </p>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
