import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

import logo from '../../assets/images/logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>

      <div className="container">

        <div className="footer__wrapper">

          <div className="copyright">

            <Link className='logo-wrapper' to='/'>
              <img className='logo' src={logo} alt='logo' />
              <p className='header__description'>
                antools.
              </p>
            </Link>

            <p className='copyright-text'>Copyright 2021. Antools</p>
            <p className='copyright-info'>Antool is a web collection of information on paid or free Design and Development tools</p>
          </div>

          <ul className="footer-list">
            <li className='footer-item footer-item__title'>Contact Us</li>
            <li className='footer-item'><a href="tel:+621987463">+621987463</a></li>
            <li className='footer-item'>M Building, No.10 A</li>
            <li className='footer-item'><a href="mailto:antools@awesome.com">antools@awesome.com</a></li>
          </ul>

          <ul className="footer-list">
            <li className='footer-item footer-item__title'>Categories</li>
            <li className='footer-item'>Design</li>
            <li className='footer-item'>Development</li>
          </ul>

          <ul className="footer-list">
            <li className='footer-item footer-item__title'>Company Info</li>
            <li className='footer-item'>Our Partners</li>
            <li className='footer-item'>Blog</li>
          </ul>

        </div>

      </div>

    </footer>
  );
};
