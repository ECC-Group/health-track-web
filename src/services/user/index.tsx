import axios from 'axios';

import { userEndpoints } from 'services/endpoints';
import IUser from 'interfaces/user';

export const Login = (email: string, password: string) => (
  axios.post(userEndpoints.Login, { email, password })
    .then((result) => result.data.userId)
    .catch()
);

export const CreateUser = (name: string, password: string, email: string, age: number) => (
  axios.post(userEndpoints.CreateUser, {
    email, password, name, age,
  }).then((result) => result.data.userId)
    .catch()
);

export const GetUser = (id: number) => (
  axios.get<IUser>(userEndpoints.GetUser(id))
    .then((result) => result.data)
    .catch()
);

// export const DeleteUser = () => {
//   axios.get<IUser>(userEndpoints.DeleteUser(id))
//     .then((result) => result.data)
//     .catch(() => ({ name: 'teste 1', email: 'email1', age: 10 }))
// };

export const EditUser = (id: number, name: string, password: string, email: string, age: number) => (
  axios.put(userEndpoints.EditUser(id), {
    name, password, email, age,
  }).then((result) => result.data)
    .catch()
);
