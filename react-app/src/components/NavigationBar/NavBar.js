
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchField from './SearchField'
import CreatePostFormModal from '../CreatePostModal';

// importing css
import "./NavBar.css"
import CreatePostForm from '../CreatePostModal/CreatePostForm';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          {/* <NavLink to='/' exact={true}>
            Create Post
          </NavLink> */}
          <CreatePostFormModal />
        </li>
        <li>
          <NavLink to='/' exact={true}>
            Profile Page
          </NavLink>
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
        <li>
          <SearchField />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
