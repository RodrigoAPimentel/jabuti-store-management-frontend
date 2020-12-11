import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <ToastContainer autoClose={6000} position="top-center" />
    <GlobalStyle />
  </Router>
);

export default App;
