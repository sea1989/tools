import React, { useState } from 'react';
import './navbarBurger.css';
import logo from '../../assets/images/logo.svg';
// import logo from '../../assets/images/menu-logo.png';

import { Link } from 'react-router-dom';

import { AccordionBurgerMenu } from '../accordionBurgerMenu';

export const NavbarBurger = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [active, setActive] = useState('');

  const projectsList = [
    { id: 1, link: '/projects', title: 'Top' },
    { id: 2, link: '/projects', title: 'All' },
  ];

  const aboutList = [
    { id: 1, link: '/about', title: 'Free' },
    { id: 2, link: '/about', title: 'Paid' },
    { id: 3, link: '/about', title: 'Free and Paid' },
  ];


  return (
    <>
      <nav className='navbar-burger'>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>

      <div
        className={menuActive ? 'menu active-burger' : 'menu'}
        onClick={() => setMenuActive(false)}
      >
        <div className='blur' />
        <div className='menu__content' onClick={(e) => e.stopPropagation()}>
          <a className='logo__container' href='/'>
            {/* <img className='logo-burger' src={logo} alt='Прима' width='160' /> */}
          </a>
          <Link className='logo-wrapper' to='/'>
            <img className='logo' src={logo} alt='logo' />


            <p className='header__description'>
              antools.
            </p>
          </Link>
          <ul className='burger-menu-list'>
            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Home</Link>
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='Categories'
                active={active}
                setActive={setActive}
                list={aboutList}
              />
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='My Collections'
                active={active}
                setActive={setActive}
                list={projectsList}
              />
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/news'>Blog</Link>
            </li>

          </ul>

          <Link className='btn-orange'>
            Help me
          </Link>

        </div>
      </div>
    </>
  );
};
