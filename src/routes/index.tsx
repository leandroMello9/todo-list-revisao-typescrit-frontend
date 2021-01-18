import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';

const Routes: React.FC = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return <Redirect to="/" />;
  }
  const routes = user ? (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
    </BrowserRouter>
  );

  return <>{routes}</>;
};

export default Routes;
