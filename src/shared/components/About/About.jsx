import React from 'react';

import { about } from '../../constants/';
import video from '../../assets/video-background/test1.mp4';

import '../../scss/_container.scss';
import './About.scss';

const About = () => {
  const { title, content } = about;
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__video-container">
          <video
            className="about__video-screen"
            id="about"
            autoPlay
            muted
            loop
            style={{ objectFit: 'cover' }}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="about__video-screen__play">
            <span className="about__video-screen__play-arrow" />
            {/* click and open modal window on Youtube */}
          </div>
        </div>
        <div className="about__text-right">
          <div className="about__title">{title}</div>
          <div className="about__content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
