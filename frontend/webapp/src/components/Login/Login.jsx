import React from 'react';
import LoginFormComponent from './FormComponent/LoginFormComponent';
import logo from './../../resources/lotus-logo.png';

const Login = () => {
  console.log('When Login Component gets rendered');
  return (
    <>
      <div>
        <img src={logo} className="login-container-logo" alt="" />
      </div>

      <div className="login-container">
        <LoginFormComponent /* email={email} password={password} submitFn={submitHandler} isLoggingIn={isLoggingIn} handleEmailInput={handleEmailInput} handlePasswordInput={handlePasswordInput} */
        />
      </div>
    </>
  );
};

export default Login;
