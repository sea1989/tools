import React from 'react';
import Lottie from "lottie-react";

// import PromoImg from '../../assets/images/promo.png';
import bgVideo from '../../assets/lottie/data5.json';
import imgSearch from '../../assets/images/search.svg';
import Inst from '../../assets/images/inst.svg';
import Twitter from '../../assets/images/twitter.svg';
import Fb from '../../assets/images/fb.svg';

import './Promo.css';

const Promo = () => {

  return (
    <div className="container">
      <section className='promo'>

        <div className="promo__info">
          <h1 className='promo__title'>
            Awesome tools for
            Designer & Developer <span>.</span>
          </h1>

          <p className='promo__subtitle'>
            Antool is a web collection of information on paid or
            free Design and Development tools</p>

          <div className="search-wrapper">
            <form className='form-search'>
              <span className='icon-search'>
                <img src={imgSearch} alt="search" />
              </span>
              <input type="search" placeholder="find more than 430+ tools..." />

              <button className='btn-orange' type="submit">Search</button>
            </form>
          </div>

          <ul className='social-list'>
            <li className='social-item'>
              <a className='social-link' href="">
                <img src={Fb} alt="" />
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href="">
                <img src={Inst} alt="" />
              </a>
            </li>
            <li className='social-item'>
              <a className='social-link' href="">
                <img src={Twitter} alt="" />
              </a>
            </li>
          </ul>

        </div>


        <Lottie className='lottie-wrapper' animationData={bgVideo} loop={true} />

        {/* <img className='promo__img' src={PromoImg} alt='test' /> */}


      </section>
    </div>
  );
};

export default Promo;
