import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push('/');
  };

  return <button onClick={onLogout} className='navbar-logout-button-dj'>Log out</button>;
};

export default LogoutButton;
