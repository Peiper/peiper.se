import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'whatwg-fetch';

import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';

import DefaultPage from './Default';
import Now from './pages/nowPage/NowPage';
import Deploy from './pages/deployPage/DeployPage';
import Money from './pages/moneyPage/MoneyPage';

const App = () =>
  <Router basename={process.env.ROOT_URL}>
    <div className="app">
      <HeaderComponent />
      <Route exact path="/" component={DefaultPage} />
      <Route exact path="/now" component={Now} />
      <Route exact path="/deploy" component={Deploy} />
      <Route exact path="/money" component={Money} />
      <FooterComponent />
    </div>
  </Router>;

export default App;
