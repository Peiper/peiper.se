import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ArticleCategoryComponent.css';

const ArticleCategoryComponent = ({ name, label, marked }) =>
  <li className={marked ? 'category marked' : 'category'}>
    <Link to={`/blog/${name}`}>{label}</Link>
  </li>;

ArticleCategoryComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  marked: PropTypes.bool.isRequired,
};

export default ArticleCategoryComponent;
