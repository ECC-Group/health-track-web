import axios from 'axios';

import { userEndpoints } from 'services/endpoints';

export const Login = async (email: string, password: string) => {
  axios.post(userEndpoints.Login, { email, password })
    .then(console.log)
    .catch((error: any) => {
      localStorage.setItem('userName', 'Lucas L');
      console.log('esta request nao esta funcionando');
    });
  return 'test';
};

export const Me = () => {
  const test = '';
  return test;
};

export const Create = () => {
  const test = '';
  return test;
};
