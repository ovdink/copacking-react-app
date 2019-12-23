import React from 'react';
import './VideoBlock.scss';
import video from '../../assets/video-background/test.mp4';

const VideoBlock = () => {
  return (
    <section className="video-block">
      <video
        className="video-block__video"
        autoPlay
        muted
        loop
        style={{ objectFit: 'cover' }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-block__play">
        <span className="video-block__play-arrow" />
        {/* click and open modal window on Youtube */}
      </div>
      <div className="video-block__scroller" />
    </section>
  );
};

export default VideoBlock;
