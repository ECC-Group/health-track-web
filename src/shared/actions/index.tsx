import IUser from 'interfaces/user';

const setUser = (command: IUser) => ({
  type: 'SET_USER',
  payload: command,
});

export default {
  setUser,
};
