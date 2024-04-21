import React, {memo} from 'react';
import { useQuery, useQueryClient } from 'react-query';
import MyNav from './MyNav';

const Home = memo(() => {
  const checkAuthStatus = async () => {
    console.log("TOKEN IN HOME: ", token);
    const response = await fetch('http://localhost:7007/api/auth/status', {
      method: 'GET',
      headers: {
        'Authorization' : token
      }
    });
    if(response.ok)
      return await response.json();
    throw new Error("Failed to check authentication status");
  }; 
  
  const { data: authenticationStatusResponse, isLoading, isError } = useQuery('auth', checkAuthStatus);
  const token = useQueryClient().getQueryData('user');

  const auth = useQueryClient().getQueryData('auth');

  if (isLoading) return <div>Loading...</div>;
  if (isError || !authenticationStatusResponse || !authenticationStatusResponse.loginStatus ) return <div>Not authenticated</div>;

  return (
    <article style={{backgroundColor: 'rgb(130, 22, 159)', minHeight: '100vh'}}>
      <MyNav user={ auth.emailId } />
      <div className='card' style={{padding: '1%'}}> HELLO WORLD</div>
      
    </article>
  );
});

export default Home;
