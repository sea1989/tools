import React from 'react';

import FigmaIcon from '../../assets/images/grommet-icons_figma.png';
import SketchIcon from '../../assets/images/logos_sketch.png';
import VSIcon from '../../assets/images/logos_visual-studio-code.png';
import NotionIcon from '../../assets/images/notion.png';
import SlackIcon from '../../assets/images/grommet-icons_slack.png';
import InvisionIcon from '../../assets/images/logos_invision-icon.png';

import ToolsItem from '../toolsItem/ToolsItem';


import './Tools.css';

const Tools = () => {

  return (
    <div className="container">
      <section className='tools'>

        <h2 className='tools__title'>
          Most Popular Tools
        </h2>

        <p className='tools__subtitle'>
          Tools for the best Designers and Developers
          most popularly used in the world
        </p>

        <ul className="tools__list">

          <ToolsItem toolsIcon={FigmaIcon} toolsName={'FIGMA'} toolsPay={'Free'} />
          <ToolsItem toolsIcon={SketchIcon} toolsName={'Sketch'} toolsPay={'Trial & Paid'} />
          <ToolsItem toolsIcon={VSIcon} toolsName={'Visual Studio Code'} toolsPay={'Free'} />
          <ToolsItem toolsIcon={NotionIcon} toolsName={'Notion'} toolsPay={'Free & Paid'} />
          <ToolsItem toolsIcon={SlackIcon} toolsName={'Slack'} toolsPay={'Free & Paid'} />
          <ToolsItem toolsIcon={InvisionIcon} toolsName={'Invision'} toolsPay={'Free & Paid'} />

        </ul>

        <button className='btn-more'>Load more</button>

      </section>
    </div>
  );
};

export default Tools;
