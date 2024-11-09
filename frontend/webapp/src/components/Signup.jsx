import React from 'react';
import Button from './Button';
import logo from './../resources/lotus-logo.png';

const Signup = () => {
  const submitHandler = () => {};
  /* const clearHandler = () => {

  }; */

  return (
    <>
      <div>
        <img src={logo} className="login-container-logo" alt="" />
      </div>

      <div className="signup-container">
        <form className="signup-form">
          <input type="email" placeholder="email-id" className="inp" />
          <input type="password" placeholder="password" className="inp" />
          <input type="password" placeholder="re-enter password" className="inp" />
          <div>
            <Button onClick={submitHandler} name="Signup" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
