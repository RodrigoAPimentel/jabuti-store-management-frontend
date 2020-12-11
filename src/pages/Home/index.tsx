import React from 'react';

import { useAuth } from '../../context/AuthContext';

const Home: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>Home Page!!!</h1>
      <h5>Bem vindo</h5>
      <button type="button" onClick={signOut}>
        logout
      </button>
    </div>
  );
};

export default Home;
