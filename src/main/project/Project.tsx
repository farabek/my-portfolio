import React from 'react';
import style from './Project.module.css';
import { BlockTitle } from '../componets/BlockTitle';
import { Card } from '../componets/Card';
import image1 from './img/proj-1.png';
import image2 from './img/editor.png';
import image3 from './img/pakko.png';
import image4 from './img/clock.jpg';
import image5 from './img/qwery.jpg';
import image6 from './img/06.jpg';

type ProjectPropsType = {
  id: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={style.project} id={props.id}>
      <div className={style.project__body}>
        <BlockTitle title={'Projects'} subTitle={'Things I’ve built so far'} />
        <div className={style.project__cards}>
          <Card
            title={'Portfolio'}
            img={image1}
            text={
              'This is a small portfolio project. The project used React, TypeScript, JavaScript, StyledComponent, CSS, HTML.'
            }
            info={'Tech stack : HTML, CSS, React, TypeScript'}
            href={'https://farabek.github.io/portfolio-fara/'}
            hrefCode={'https://github.com/farabek/portfolio-fara'}
          />
          <Card
            title={'Message-Creator'}
            img={image2}
            text={
              'Offline task - Message Template Editor. It is necessary to develop a message template editor and a preview widget messages. Description of the task in the file Message Template Editor.pdf at the link https://github.com/farabek/message-creator'
            }
            info={'Tech stack : React, TypeScript, HTML5, CSS3/SCSS, JS'}
            href={'https://farabek.github.io/message-creator/'}
            hrefCode={'https://github.com/farabek/message-creator'}
          />
          <Card
            title={'Clock'}
            img={image4}
            text={
              'A small clock project in the React library, React hooks applied: useState, useEffect. CSS modules and styled components approaches are used.'
            }
            info={'HTML, CSS-Modules, Styled-Components, TypeScript, React'}
            href={'https://farabek.github.io/clock/'}
            hrefCode={'https://github.com/farabek/clock'}
          />
          <Card
            title={'Pakko'}
            img={image3}
            text={
              'Adaptive layout of a simple website from scratch - Stack: HTML, SCSS, VS Code, Figma.'
            }
            info={'Tech stack : HTML5, CSS3/SCSS, JS'}
            href={'https://farabek.github.io/pakko/'}
            hrefCode={'https://github.com/farabek/pakko'}
          />
          <Card
            title={'Landing Indonesia'}
            img={image5}
            text={
              'Responsive concept Indonesia travel website. Implementation: Fullscreen start block, implementation of spollers on mobile devices, Slider-Swiper, etc.'
            }
            info={'Tech stack : HTML , JavaScript, SASS, React'}
            href={''}
            hrefCode={''}
          />
          <Card
            title={'Project Tile goes here'}
            img={image6}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
            info={'Tech stack : HTML , JavaScript, SASS, React'}
            href={''}
            hrefCode={''}
          />{' '}
        </div>
      </div>
    </div>
  );
};
