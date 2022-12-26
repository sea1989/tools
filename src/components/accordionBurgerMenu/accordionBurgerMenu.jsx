import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './accordionBurgerMenu.css';

export const AccordionBurgerMenu = ({ title, active, setActive, list }) => {
  return (
    <div className='accordion'>
      <div className='accordionBurgerMenuHeading'>
        <div className='container'>
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active === title ? (
              <svg
                width='13'
                height='8'
                viewBox='0 0 13 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.91 -7.62939e-08L6.5 4.59L11.09 -7.62939e-08L12.5 1.42L6.5 7.42L0.5 1.42L1.91 -7.62939e-08Z'
                  fill='#fff'
                />
              </svg>
            ) : (
              <svg
                width='9'
                height='12'
                viewBox='0 0 9 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.20492 0L0.794922 1.41L5.37492 6L0.794922 10.59L2.20492 12L8.20492 6L2.20492 0Z'
                  fill='#fff'
                />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div className={(active === title ? 'show' : '') + ' accordionContent'}>
        <div className='container'>
          <ul className='accordion__list'>
            {list.map((item) => (
              <li key={item.id} className='accordion__item'>
                <Link className='accordion__link' to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
