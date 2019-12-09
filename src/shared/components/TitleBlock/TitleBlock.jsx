import React from "react";
import "../../scss/_container.scss";
import "./TitleBlock.scss";

const TitleBlock = ({ titleData: { title, content, icon } }) => {
    return (
        <div className="title-block">
            <div className="container" key={title}>
                <div className="title-block-left">
                    <div className="title-block__title">{title}</div>
                    <div className="title-block__content">{content}</div>
                </div>
                <div className="title-block__icons" style={{ backgroundImage: `url(${icon})` }} />
            </div>
        </div>
    );
};

export default TitleBlock;
