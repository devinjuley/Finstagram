import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchField from './SearchField'
import CreatePostFormModal from '../CreatePostModal';
import { useSelector } from 'react-redux';

// importing css
import "./NavBar.css"

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <nav id='nav-om'>
      <ul className='navbar-ul-dj'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active' id='home-button-om'>
            𝙵𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
            {/* <img src='https://fontspool.com/pngimages/1131639161101.png' alt='logo' id='logo'/> */}
          </NavLink>
        </li>
        <li>
          <CreatePostFormModal activeClassName='active' />
        </li>
        <li>
          <NavLink to='/posts/discover' exact={true} activeClassName='active'>
            discover
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${sessionUser?.id}`} exact={true}>
            Profile Page
          </NavLink>
        </li>
        <li>
          <SearchField />
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
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
