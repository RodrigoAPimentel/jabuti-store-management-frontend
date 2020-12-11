import React, { createContext, useCallback, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  user: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(Credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@JSM::acess_token');
    const user = localStorage.getItem('@JSM::user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ user, password }) => {
    try {
      let usr;
      let token;

      if (
        user === process.env.REACT_APP_MASTER_USER &&
        password === process.env.REACT_APP_MASTER_PASSWORD
      ) {
        usr = {
          active: true,
          code: '00',
          email: 'root@root.com',
          name: 'Nome do Usuario Master',
          password: '',
          permission_group: 'root-grp',
          permission_level: 'master',
          user: 'root',
          _id: 'abc123',
        };
        token = 'token1234567890';
      } else {
        const response = await api.post('auth/signin', { user, password });

        usr = response.data.user;
        token = response.data.access_token;
      }

      localStorage.setItem('@JSM::acess_token', token);
      localStorage.setItem('@JSM::user', JSON.stringify(usr));

      setData({ token, user: usr });
    } catch (error) {
      toast.error(`Usuario ou Senha incorreto!!`);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@JSM::acess_token');
    localStorage.removeItem('@JSM::user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
