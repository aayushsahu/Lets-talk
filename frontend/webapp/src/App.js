import React, {memo} from 'react';
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
//import { useState } from 'react';

const queryClient = new QueryClient();

persistQueryClient({
  queryClient,
  persistor: createWebStoragePersistor({ storage: window.localStorage }),
});

const App = memo(() => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(`IsLoggedIn from handleLogin ${isLoggedIn}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(`IsLoggedIn from handleLogout ${isLoggedIn}`);
    queryClient.clear();
  }; */

  /* return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" element={<Home onLogout={handleLogout} />} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home onLogout={handleLogout} />
            ) : (
              <Navigate to="/" element={<Login onLogin={handleLogin} />} />
            )
          }
        />
      </Routes>
    </BrowserRouter> */

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login/> }/>
          <Route path="/home" element={ <Home/> } />
        </Routes>
      </BrowserRouter> 
  );
});

const WrappedApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default WrappedApp;
