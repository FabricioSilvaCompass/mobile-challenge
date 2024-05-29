import React, {createContext, useState} from 'react';
import * as Auth from '../services/auth';
interface PostsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  login(): Promise<void>;
  signUp(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PostsContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const response = await Auth.login();
    setToken(response.token);
    setLoading(false);
  }

  async function signUp() {}

  return (
    <AuthContext.Provider
      value={{signed: !!token, user: token, loading: loading, login, signUp}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
