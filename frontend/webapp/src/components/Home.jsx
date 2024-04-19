import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import MyNav from './MyNav';

var token;

const checkAuthStatus = async () => {
  console.log("TOKEN IN HOME: ", token);
  const response = await fetch('http://localhost:7007/api/auth/status', {
    method: 'GET',
    headers: {
      'Authorization' : token
    }
  });
  return await response.json();;
}; 

const Home = () => {
  const { data: authenticationStatusResponse, isLoading, isError } = useQuery('user', checkAuthStatus);
  
  // To get all the keys in query cache
  // const queryKeys = useQueryClient().getQueryCache().getAll().map(cache => cache.queryKey);
  // console.log("KEY: ", queryKeys);
  // console.log("KEY exists: ", queryKeys.indexOf('user'));
  // console.log("Value: ", useQueryClient().getQueryCache().getAll());
  token = useQueryClient().getQueryData();
  console.log("TOKEN IN HOME: ", token);
  console.log("Authenticated or not", authenticationStatusResponse);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !authenticationStatusResponse || !authenticationStatusResponse.loginStatus ) return <div>Not authenticated</div>;

  return (
    <>
      <MyNav />
      <div>HELLO WORLD</div>
    </>
  );
}

export default Home;
