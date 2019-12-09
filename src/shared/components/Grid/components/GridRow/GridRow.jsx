import cn from "classnames";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GridCard from "../GridCard";
import "./GridRow.scss";

const GridRow = ({ cards = [], active, setActive }) => {
    const expander = cards.find(item => item.name === active);
    return (
        <>
            <div>
                <TransitionGroup className="row">
                    {cards.map(item => (
                        <CSSTransition
                            onClick={setActive}
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
            <div className={cn("expander", { "open-expander": expander })}>
                {expander && expander.name}
                <div className="closeme" onClick={setActive}>
                    Х
                </div>
            </div>
        </>
    );
};

export default GridRow;
