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
          id='logo'
          onClick={() => history.push('/')}
          src='https://media.discordapp.net/attachments/917128220552331345/918969992798699540/pngimages_1041639168432.png'
        />
        <div id='search-om'>
          <SearchField />
        </div>
        <div>
          <CreatePostFormModal activeClassName='active' />
        </div>
        <div>
          <NavLink to='/posts/discover' exact={true} activeClassName='active'>
            Discover
          </NavLink>
        </div>
        <div>
          <NavLink to={`/users/${sessionUser?.id}`} exact={true}>
            Profile Page
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
