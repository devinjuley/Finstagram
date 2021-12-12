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
          <NavLink to='/' exact={true} id='logo'>
            Finstagram
          </NavLink>
        </li>
        <li id='search-om'>
          <SearchField />
        </li>
        <li className='navbar-home-li-dj'>
          <NavLink to='/' exact={true} className={'navbar-home-link-dj'}>
            <img src='https://media.discordapp.net/attachments/917128220552331345/919422113163673720/unknown.png' />
          </NavLink>
        </li>
        <li className='navbar-create-post-li-dj'>
          <CreatePostFormModal activeClassName='active' />
        </li>
        <li className='navbar-discover-li-dj'>
          <NavLink to='/posts/discover' exact={true} className='navbar-discover-link-dj'>
            <img src='https://media.discordapp.net/attachments/917128220552331345/919420101416058910/unknown.png' />
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${sessionUser?.id}`} exact={true}>
            <img src={sessionUser?.profile_image_url} className='commented-user-profile-image-navbar-dj' />
          </NavLink>
        </li>
        <li className='navbar-logout-li-dj'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
