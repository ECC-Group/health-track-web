import axios from 'axios';

import { weightEndpoints } from 'services/endpoints';
import IWeight from 'interfaces/weight';

export const GetWeightList = (userId: number) => (
  axios.get<IWeight[]>(weightEndpoints.GetWeightList(userId))
    .then((result) => result.data)
    .catch()
);

export const SetWeight = (userId: number) => (
  axios.post(weightEndpoints.SetWeight(userId))
    .then((result) => result.data)
    .catch()
);
