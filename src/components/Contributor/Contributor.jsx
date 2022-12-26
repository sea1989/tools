import React from 'react';

// import LogoWP from '../../assets/images/logos_wordpress.png';



import './Contributor.css';

const Contributor = () => {

  return (
    <div className="container">
      <section className='contributor'>

        <h2>
          Become a contributor?
        </h2>

        <p className='contributor__subtitle'>
          Join us and get tips & tricks to become a great Designer and Developer
        </p>

        <div className="search-wrapper">
          <form className='form-search'>
            <span className='icon-search'>
            </span>
            <input type="text" placeholder="Enter your email..." />

            <button className='btn-orange' type="submit">Join Us</button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contributor;
