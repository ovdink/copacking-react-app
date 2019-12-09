import React from "react";
import "../../../../scss/_container.scss";
import "../../Grid.scss";

const GridCard = ({ name, image, isActive, onClick }) => {
    return (
        <div className="relative">
            <div
                className="grid__card"
                style={{ marginBottom: isActive ? "550px" : "" }}
                onClick={() => onClick(name)}
            >
                <img className="grid__card__image" src={image} alt="#" />
                <div className="grid__card-placeholder">
                    <div className="grid__card-placeholder_title">{name}</div>
                    <a className="grid__card-placeholder_arrow">
                        <span className="left-bar" />
                        <span className="right-bar" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GridCard;
