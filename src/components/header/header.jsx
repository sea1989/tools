import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import { Navbar } from '../navbar/navbar';

import logo from '../../assets/images/logo.svg';
import { NavbarBurger } from '../navbarBurger/navbarBurger';

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <NavbarBurger />


          <Link className='logo-wrapper' to='/'>
            <img className='logo' src={logo} alt='logo' />


            <p className='header__description'>
              antools.
            </p>
          </Link>

          <Navbar />

          <div className="login-wrapper">
            <Link className='nav__link'>
              Login
            </Link>
            <Link className='btn-orange'>
              Sign Up
            </Link>
          </div>

        </div>

      </div>

    </header>
  );
};
