import cn from "classnames";
import React, { useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GridCard from "../GridCard";
import "./GridRow.scss";

const GridRow = ({ cards = [], active, setActive }) => {
    const expander = cards.find(item => item.name === active);
    const expanderRef = useRef(null);
    const rowRef = useRef(null);

    const handleToggle = e => {
        // if (expanderRef.current && !expander) {
        //     window.scrollTo(0, rowRef.current.offsetTop + 200);
        // }
        setActive(e, rowRef);
    };

    return (
        <>
            <div ref={rowRef}>
                <TransitionGroup className="row">
                    {cards.map(item => (
                        <CSSTransition
                            onClick={handleToggle}
                            key={item ? item.name : 0}
                            appear
                            exit
                            timeout={500}
                            classNames="item"
                        >
                            {item && <GridCard name={item.name} image={item.image} />}
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <div ref={expanderRef} className={cn("expander", { "open-expander": expander })}>
                {expander && expander.name}
                <div className="closeme" onClick={handleToggle}>
                    Х
                </div>
            </div>
        </>
    );
};

export default GridRow;
