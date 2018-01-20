import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'whatwg-fetch';

import DefaultPage from './Default';
import Article from './pages/blogPage/ArticlePage';

const App = () =>
  <Router basename={process.env.ROOT_URL}>
    <div className="App">
      <Route exact path="/" component={DefaultPage} />
      <Route exact path="/blog" component={DefaultPage} />
      <Route exact path="/blog/:category" component={DefaultPage} />
      <Route exact path="/article/:id" component={Article} />
    </div>
  </Router>;

export default App;
