import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchField from './SearchField'
import CreatePostFormModal from '../CreatePostModal';
import { useSelector } from 'react-redux';

// importing css
import "./NavBar.css"

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const history = useHistory();

  return (
    <div id='nav-om'>
      <div className='navbar-ul-dj'>
        <img
          className='logo'
          onClick={() => history.push('/')}
          
        />
        <div>
          <CreatePostFormModal activeClassName='active' />
        </div>
        <div>
          <NavLink to='/posts/discover' exact={true} activeClassName='active'>
            discover
          </NavLink>
        </div>
        <div>
          <NavLink to={`/users/${sessionUser?.id}`} exact={true}>
            Profile Page
          </NavLink>
        </div>
        <div>
          <SearchField />
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
