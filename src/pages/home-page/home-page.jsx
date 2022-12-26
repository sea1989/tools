import React from 'react';
import './home-page.css';

import Promo from '../../components/Promo/Promo';
import Tools from '../../components/tools/Tools';
import Brands from '../../components/Brands/Brands';
import Newcomer from '../../components/Newcomer/Newcomer';
import Slider from '../../components/Slider/Slider';
import Contributor from '../../components/Contributor/Contributor';


export const HomePage = () => {
  return (
    <main>
      <Promo />
      <Tools />
      <Brands />
      <Newcomer />
      <Slider />
      <Contributor />
    </ main>
  );
};
