import React from 'react';

import './Title-block.scss';
import '../../scss/_container.scss'

const titleData = [{
  title: 'Под ключ', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                                Assumenda aut, quidem alias delectus expedita minus consequuntur repellat neque placeat veniam \
                                repellendus nihil eos suscipit tempora illo dicta. Deleniti, enim consequuntur!'},];
// {
//   title: 'Простые операции', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
//                                 Assumenda aut, quidem alias delectus expedita minus consequuntur repellat neque placeat veniam \
//                                 repellendus nihil eos suscipit tempora illo dicta. Deleniti, enim consequuntur!'}];

const TitleBlock = () => {
  const titles = titleData.map((item) => {
    const { title, content } = item;

    console.log(title)
    return (
      <div className="container">
        <div className="title-block-left">
          <div className="title-block__title">{title}</div>
          <div className="title-block__content">{content}</div>
        </div>
        <div className="title-block__icons"></div>
      </div>
    );
  });
  return (
    <div className="title-block">{titles}</div>
  )

};

export default TitleBlock;
