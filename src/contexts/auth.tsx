import React, {createContext, useState} from 'react';
import * as Auth from '../services/api';
import {Transaction} from '../models/models';
interface PostsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AuthContextData {
  signed: boolean;
  token: string | null;
  loading: boolean;
  statements: Transaction[];
  balance: number | null;
  login(data: any): Promise<void>;
  signUp(data: any): Promise<void>;
  getStatements(): Promise<void>;
  getBalance(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PostsContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [statements, setStatement] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number | null>(null);

  async function login(data: any) {
    setLoading(true);
    try {
      const response = await Auth.postUserDataLogin(data);
      setToken(response.access_token);
    } catch (error) {
      setLoading(false);
      throw error;
    }
    setLoading(false);
  }
  async function signUp(data: any) {
    try {
      const response = await Auth.postUserDataSignUp(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async function getStatements() {
    try {
      Auth.getStatementData(token).then(response => {
        setStatement(response);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function getBalance() {
    try {
      Auth.getBalanceData(token).then(response => {
        setBalance(response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        token: token,
        loading: loading,
        statements: statements,
        balance: balance,
        login,
        signUp,
        getStatements,
        getBalance,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
