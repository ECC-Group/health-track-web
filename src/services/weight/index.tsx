import axios from 'axios';

import { userEndpoints } from 'services/endpoints';

export const GetWeightList = (email: string, password: string) => (
  axios.post(userEndpoints.Login, { email, password })
    .then((result) => result.data.userId)
    .catch(() => (10))
);

export const SetWeight = (name: string, password: string, email: string, age: number) => (
  axios.post(userEndpoints.CreateUser, {
    email, password, name, age,
  }).then((result) => result.data.userId)
    .catch(() => (10))
);
