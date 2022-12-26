import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {


  return (
    <nav className='header__navbar'>
      <ul className='nav__list'>

        <li className='nav__item'>
          <Link className='nav__link nav__link--active' to='/'>
            Home
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/about'>
            Categories <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="white" stroke-opacity="0.55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/current-projects'>
            My Collections
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/news'>
            Blog
          </Link>
        </li>

      </ul>

    </nav>
  );
};
