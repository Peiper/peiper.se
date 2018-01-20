import React from 'react';

import './HeaderComponent.css';

const HeaderComponent = () => {
  const headerStyle = {
  };

  return (
    <header id="header" className="header">
      <div id="menu" className="menu" role="navigation">
        <span className="menu__list-item"><a href="/" className="menu__link">Peiper</a></span>
        <span className="menu__list-item"><a href="/now" className="menu__link">Just nu</a></span>
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
};

export default HeaderComponent;
