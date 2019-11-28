import React from 'react';

import './Filter-buttons.scss';
import '../../scss/_container.scss'

const FilterButtons = () => {
    return (
        <div className="filter-buttons">
            <div className="container">
                <div className="filter-buttons__title">
                    <div>Выберите отрасль</div>
                    <div>Вашего бизнеса</div>
                </div>
                <div className="filter-buttons__button">{/*key name and id*/}</div>
            </div>
        </div>
    )
}

export default FilterButtons;