import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//thunk imports
import { logout } from '../../store/session';
import { removeAllFollowsThunk } from '../../store/follows';
import { removeAllPostsThunk } from '../../store/post';
import { removeProfileThunk } from '../../store/profile';

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(logout());
    dispatch(removeAllFollowsThunk());
    dispatch(removeAllPostsThunk());
    dispatch(removeProfileThunk());
    return history.push('/');
  };

  return <button onClick={onLogout} className='navbar-logout-button-dj'>Log out</button>;
};

export default LogoutButton;
