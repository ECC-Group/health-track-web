import axios from 'axios';

import { userEndpoints } from 'services/endpoints';
import IUser from 'interfaces/user';

export const Login = (email: string, password: string) => (
  axios.post<number>(userEndpoints.Login, { email, password })
    .then((result) => result.data)
    .catch(() => (10))
);

export const CreateUser = () => {
  const test = '';
  return test;
};

export const GetUser = (id: number) => (
  axios.get<IUser>(userEndpoints.GetUser(id))
    .then((result) => result.data)
    .catch(() => ({ name: 'teste 1', email: 'email1', age: 10 }))
);

export const DeleteUser = () => {
  const test = '';
  return test;
};

export const EditUser = () => {
  const test = '';
  return test;
};
