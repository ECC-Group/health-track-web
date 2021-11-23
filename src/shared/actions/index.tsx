import IUser from 'interfaces/user';

const setUser = (command: IUser) => ({
  type: 'SET_USER',
  payload: command,
});

const clearUser = () => ({
  type: 'CLEAR_USER',
});

export default {
  setUser,
  clearUser,
};
