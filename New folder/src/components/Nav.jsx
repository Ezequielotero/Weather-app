import React from 'react';
// import Logo from '../logoHenry.png'
// import SearchBar from './SearchBar.jsx';

import SearchBar from './SearchBar';
import  './Nav.css';
import { Link } from 'react-router-dom';

   function Nav({onSearch}) {
    return (
      <nav className="nav">
        <Link to='/'>
          <span className="navbar-brand">
          </span>
        </Link>
        <div className="aboutdiv">
        <Link to='/about'>
          <span className="about">About me</span>
        </Link>
        </div>
        <div className="hola">
          <SearchBar
            onSearch={onSearch} className="searchbar"
          />
          </div>
      </nav>
    );
  };
  export default Nav