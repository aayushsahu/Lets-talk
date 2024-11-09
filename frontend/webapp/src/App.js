/* eslint-disable linebreak-style */
import React, { memo } from 'react';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import MessageComponent from './components/Message/Message';

const queryClient = new QueryClient();

persistQueryClient({
  queryClient,
  persistor: createWebStoragePersistor({ storage: window.localStorage })
});

const App = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/logout" element={ <Redirect to="/"/> }/> */}
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<MessageComponent />} />
      </Routes>
    </BrowserRouter>
  );
});

App.displayName = 'App';

const WrappedApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default WrappedApp;
