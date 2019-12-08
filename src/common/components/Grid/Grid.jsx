import React from 'react';

import './Grid.scss';
import '../../scss/_container.scss';
import { cards } from 'common/constants';

const Grid = ({ selectedCards }) => {
  const onExpandCard = (name, thiss) => {
    event.preventDefault();
    cards.map((card) => {
      if (card.name == name) {
        alert(`${card.name} \n ${card.text} \n ${card.slider}`);
        console.log(thiss);
      }
    });
  };

  return (
    <div className="container">
      <div className="grid">
        {cards.map(({ name, image, id }) => {
          if (selectedCards === 'all' || selectedCards === id) {
            return (
              <div
                className="grid__card"
                onClick={() => onExpandCard(name, this)}
                key={name}
              >
                <img className="grid__card__image" src={image} alt="#" />
                <div className="grid__card-placeholder">
                  <div className="grid__card-placeholder_title">{name}</div>
                  <a className="grid__card-placeholder_arrow">
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Grid;
