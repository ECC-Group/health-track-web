import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GetUser } from 'services/user';
import Actions from 'shared/actions';

const Authentication = ({ children }: any) => {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      GetUser(parseInt(userId, 10)).then((result) => {
        dispatch(Actions.setUser(result));
      });
    } else {
      navigate('login');
    }
  }, []);

  return (children);
};

export default Authentication;
