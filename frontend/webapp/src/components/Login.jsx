import React, { useState } from 'react';
import Button from './Button';
import logo from './../resources/lotus-logo.png';
import useAuthentication from '../hooks/useAuthentication';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoggingIn } = useAuthentication();
  console.log('When Login Component gets rendered', isLoggingIn);
  
  const submitHandler = async (event) => {
    //props.onLogin();
    console.log(`Email: ${email} Password: ${password}`);
    event.preventDefault();
    try {
      console.log(`Email: ${email} Password: ${password}`);
      const resp = login({ email, password });
      console.log(`submitHandler from Login component ${JSON.stringify(resp)}`);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div>
        <img src={logo} className="login-container-logo" alt="" />
      </div>

      <div className="login-container">
        <form className="login-form">
          <input type="email" placeholder="email-id" className="inp" onChange={handleEmailInput} />
          <input
            type="password"
            placeholder="password"
            className="inp"
            onChange={handlePasswordInput}
          />
          <div>
            <Button onClick={submitHandler} name={isLoggingIn ? 'Logging In...' : 'Login'}/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
