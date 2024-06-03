import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-challenge.micheltlutz.me',
});

interface UserCredentialsLogin {
  userid: string;
  password: string;
}

interface UserCredentialsSignUp {
  userid: string;
  password: string;
  birthday: string;
  fullname: string;
}

export async function postUserDataLogin(
  credentials: UserCredentialsLogin,
): Promise<any> {
  try {
    const response = await api.post('/auth/', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function postUserDataSignUp(
  credentials: UserCredentialsSignUp,
): Promise<any> {
  try {
    const response = await api.post('/users/', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getStatementData(token: string | null): Promise<any> {
  try {
    const response = await api.get('/statements/?skip=0&limit=10', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getBalanceData(token: string | null): Promise<any> {
  try {
    const response = await api.get('/balance/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.amount;
  } catch (error) {
    throw error;
  }
}
