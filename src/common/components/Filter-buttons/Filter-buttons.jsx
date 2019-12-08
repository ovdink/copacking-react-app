import React from 'react';
import cx from 'classnames';
import { buttons } from 'common/constants';

import './Filter-buttons.scss';
import '../../scss/_container.scss';

const FilterButtons = ({ onFilterChangeId, selectedTabId }) => {
  return (
    <div className="filter-buttons">
      <div className="container">
        <div className="filter-buttons__title">
          <div className="title-with-butt">Выберите отрасль&nbsp;</div>
          <div className="title-with-butt">Вашего бизнеса</div>
        </div>
        {/* <div className="filter-buttons__container"> */}
        {buttons.map(({ name, id }) => {
          const buttonClass = cx({
            'filter-buttons__button': true,
            'filter-buttons__button_active': selectedTabId === id
          });
          return (
            <button
              className={buttonClass}
              onClick={onFilterChangeId(id)}
              key={id}
            >
              {name}
            </button>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FilterButtons;
