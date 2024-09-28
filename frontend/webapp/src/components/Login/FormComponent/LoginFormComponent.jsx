import React, { memo, useState } from 'react';
import Button from '../../Button';
import useAuthentication from '../../../hooks/useAuthentication';

const LoginFormComponent = memo((/* {email, password, submitFn, isLoggingIn, handleEmailInput, handlePasswordInput} */) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login, isLoggingIn } = useAuthentication();
    
    const submitHandler = async (event) => {
        console.log(`Email: ${email} Password: ${password}`);
        event.preventDefault();
        try {
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
        <form className="login-form">
            <input type="email" placeholder="email-id" className="inp" 
                onChange={handleEmailInput} 
            />
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
    );


});

export default LoginFormComponent;
