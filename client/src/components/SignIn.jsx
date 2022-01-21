import React, { useState } from 'react';

function SignIn() {
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
          }}
        >
          <div className="s-i-f-input">
            <label htmlFor="username">Username</label>
            <input name="username" id="username" required />
          </div>
          <div className="s-i-f-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="p-word" required />
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
