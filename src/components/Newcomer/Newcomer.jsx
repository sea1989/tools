import React from 'react';
import { Link } from 'react-router-dom';

import Zeplin from '../../assets/images/zeplin.png';
import PHP from '../../assets/images/jb_phpstorm.png';
import Toolbox from '../../assets/images/jb_toolbox_app.png';
import Procreate from '../../assets/images/procreate.png';

import ToolsItem from '../toolsItem/ToolsItem';


import './Newcomer.css';

const Newcomer = () => {

  return (
    <div className="container">
      <section className='newcomer'>

        <div className="newcomer__info">

          <h2>
            Newcomer Tools
          </h2>

          <p>Wow! see the latest update of the most recommended
            tools from reliable designers and developers</p>

          <Link className='btn-orange'>
            Explore more
          </Link>

        </div>

        <ul className="newcomer__list">
          <ToolsItem toolsIcon={Zeplin} toolsName={'Zeplin'} toolsPay={'Free & Paid'} />
          <ToolsItem toolsIcon={PHP} toolsName={'PHPStorm'} toolsPay={'Free'} />
          <ToolsItem toolsIcon={Toolbox} toolsName={'Toolbox'} toolsPay={'Free'} />
          <ToolsItem toolsIcon={Procreate} toolsName={'Procreate'} toolsPay={'Paid'} />
        </ul>

      </section>
    </div>
  );
};

export default Newcomer;
