import IUser from 'interfaces/user';

const initialState: IUser = {
  name: '',
  age: 0,
  email: '',
};

const user = (state: IUser = initialState, action: any = {}) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default user;
