import React, { useEffect, useRef, useState } from 'react';
import GridRow from './components/GridRow/GridRow';

import './Grid.scss';
import '../../scss/_container.scss';

import { cards } from 'common/constants';

const Grid = ({ selectedCards }) => {
  const gridRef = useRef(null);
  const [activeCard, setActiveCard] = useState();
  const [rowsData, setRowData] = useState(null);
  const [itemsInRow, setItemsInRow] = useState(null);

  const pack = (i) => {
    const res = [];
    let temp = [];
    const c = cards.filter((item) => {
      if (selectedCards !== 'all') {
        return item.id === selectedCards;
      }
      return true;
    });

    console.log(c);

    c.forEach((item, idx) => {
      if ((idx + 1) % i === 0) {
        temp.push(item);
        res.push(temp);
        temp = [];
      } else {
        temp.push(item);
      }
    });
    return setRowData(res);
  };

  useEffect(() => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.clientWidth < 1366 ? 375 : 575;
      const r = Math.floor(gridRef.current.clientWidth / cardWidth);
      if (!itemsInRow) {
        setItemsInRow(r);
      }
      pack(r);
    }
  }, [selectedCards]);

  window.onresize = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.clientWidth < 1366 ? 375 : 575;
      const newItemsCount = Math.floor(gridRef.current.clientWidth / cardWidth);
      if (newItemsCount !== itemsInRow) {
        setItemsInRow(newItemsCount);
        pack(newItemsCount);
      }
    }
  };

  const handleClick = (e) => {
    if (e === activeCard) {
      setActiveCard(null);
    } else {
      setActiveCard(e);
    }
  };

  return (
    <div className="container">
      <div className="grid" ref={gridRef}>
        {rowsData &&
          rowsData.map((item) => {
            const cardWidth = gridRef.current.clientWidth < 1366 ? 375 : 575;
            return (
              <GridRow
                cards={item}
                active={activeCard}
                setActive={handleClick}
                itemWidth={cardWidth}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
