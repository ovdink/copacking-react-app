import React from 'react';

import './Video-block.scss';

const VideoBlock = () => {
  return (
    <section className="background-video">
      <div className="background-video__play">
        <span className="background-video__play-arrow" />
        {/* click and open modal window on Youtube */}
      </div>
      <div className="background-video__scroller" />
    </section>
  );
};

export default VideoBlock;
