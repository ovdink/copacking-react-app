import React, { useEffect, useRef, useState } from 'react';

import GridRow from './components/GridRow';

import '../../scss/_container.scss';
import './components/GridRow/GridRow.scss';
import './Grid.scss';

const Grid = ({ selectedCards, cards }) => {
  console.log(cards);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsInRow, selectedCards]);

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

  const handleClick = (e, ref) => {
    if (e === activeCard) {
      setActiveCard(null);
    } else {
      console.log(document.documentElement.scrollTop, ref.current.offsetTop);

      setActiveCard(e);
      if (ref.current && activeCard) {
        if (document.documentElement.scrollTop < ref.current.offsetTop) {
          document.documentElement.scrollTop = ref.current.offsetTop - 300;
          // тут короче над правильно пощщитать просто
        } else document.documentElement.scrollTop = ref.current.offsetTop + 200;
      }
    }
  };

  const rows = rowsData && rowsData.length ? rowsData : [[]];

  return (
    <div className="container">
      <div className="grid" ref={gridRef}>
        {gridRef.current &&
          rows.map((item) => {
            return (
              <GridRow
                key={item[0] ? item[0].name : 0}
                cards={item}
                active={activeCard}
                setActive={(e, ref) => handleClick(e, ref)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
