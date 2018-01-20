import React from 'react';
import PropTypes from 'prop-types';

import './HeaderComponent.css';

const HeaderComponent = ({ backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url("${backgroundImage}")`,
  };

  return (
    <header id="header" className="header">
      <div className="header__content" style={headerStyle}>
        <a className="hamburger-menu" href="#asdf">
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
        </a>
        <nav id="menu" className="menu" role="navigation">
          <ul className="menu__list">
            <li className="menu__list-item"><a href="#1" className="menu__link">Just nu</a></li>
            <li className="menu__list-item"><a href="#6" className="menu__link">Kontakt</a></li>
          </ul>
        </nav>
        <h1 className="header__title">
          <em>Peiper</em>
        </h1>
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default HeaderComponent;
