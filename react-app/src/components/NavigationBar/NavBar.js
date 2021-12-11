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
    <nav id='nav-om'>
      <ul className='navbar-ul-dj'>
        <li id='logo-container-om'>
          <img
            id='logo'
            onClick={() => history.push('/')}
            src='https://media.discordapp.net/attachments/917128220552331345/918969992798699540/pngimages_1041639168432.png'
            alt='logo'
          />
        </li>
        <li id='search-om'>
          <SearchField />
        </li>
        <li>
          <CreatePostFormModal activeClassName='active' />
        </li>
        <li>
          <NavLink to='/posts/discover' exact={true} activeClassName='active'>
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${sessionUser?.id}`} exact={true}>
            Profile Page
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
