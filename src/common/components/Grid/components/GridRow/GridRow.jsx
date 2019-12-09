import React from 'react';
import GridCard from '../GridCard/GridCard';

const GridRow = ({ cards = [], itemWidth = 570, active, setActive }) => {
  const expander = cards.find((item) => item.name === active);
  return (
    <>
      <div className="row">
        {cards.map((item) => (
          <GridCard
            width={itemWidth}
            onClick={setActive}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
      <div
        className="expander"
        style={{
          maxHeight: expander ? `${550}px` : '0px'
        }}
      >
        {expander && expander.name}
      </div>
    </>
  );
};

export default GridRow;
