import React from 'react';

import './FooterComponent.css';

const FooterComponent = () => {
  const headerStyle = {
  };

  return (
    <footer id="footer" className="footer">
      <div className="text">
        <div>
          Ansvarig utgivare: Niklas Peiper
        </div>
        <div>
          Kontakt: <a href="mailto:niklas@peiper.se" target="_top">niklas@peiper.se</a>
        </div>
      </div>
    </footer>
  );
};

FooterComponent.propTypes = {
};

export default FooterComponent;
