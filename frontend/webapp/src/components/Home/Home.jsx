import React, { memo, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import MyNav from '../MyNav';
import ChatComponent from './Chat/Chat';

const Home = () => {
  console.log('HOME');
  const token = useQueryClient().getQueryData('user');
  const checkAuthStatus = useCallback(async () => {
    const response = await fetch('http://localhost:7007/api/auth/status', {
      method: 'GET',
      headers: {
        Authorization: token
      }
    });
    if (response.ok) return await response.json();
    throw new Error('Failed to check authentication status');
  }, [token]);

  const {
    data: authenticationStatusResponse,
    isLoading,
    isError
  } = useQuery('auth', checkAuthStatus);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !authenticationStatusResponse || !authenticationStatusResponse.loginStatus)
    return <div>Not authenticated</div>;

  const contactsFetch = useCallback(async () => {
    const response = await fetch('http://localhost:7007/api/contacts', {
      method: 'GET',
      headers: {
        Authorization: token,
        email: authenticationStatusResponse.emailId
      }
    });
    if (response.ok) return await response.json();
    throw new Error('Failed to fetch contacts');
  }, [token]);

  const { data: contactFetchData, isLoading1, isError1 } = useQuery('contacts', contactsFetch);
  const contacts = useQueryClient().getQueryData('contacts');

  if (isLoading1) return <div>Loading...</div>;
  if (isError1 || !contactFetchData || contactFetchData.length <= 0)
    return <div>You have no contacts</div>;

  return (
    <article style={{ backgroundColor: 'rgb(130, 22, 159)', minHeight: '100vh' }}>
      <MyNav user={authenticationStatusResponse.emailId} />
      <div className="card" style={{ padding: '1%' }}>
        <div style={{ display: 'flex', flexFlow: 'wrap', flexGrow: '3' }}>
          {contacts.map((d) => (
            <ChatComponent key={d.name} name={d.name} image={d.image} contact={d.contact} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default memo(Home);
