import React from "react";
import logo from "../../assets/icons/header__logo.png";
import hamburger from "../../assets/icons/header__menu_test.png";
import orderProject from "../../assets/icons/order-project.png";
import "./AppHeader.scss";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__hamburger">
                <img src={hamburger} alt="#" />
                {/* will be single component with styles and call function dynamic modal window (menu)  */}
            </div>
            <div className="header__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header__order-project">
                <img src={orderProject} alt="Logo" />
                {/* modal window with inputs/button for order */}
            </div>
        </header>
    );
};

export default AppHeader;
