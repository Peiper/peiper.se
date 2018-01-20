import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getArticles, getCategories, getArticlesByCategory } from './pages/blogPage/BlogService';
import ArticleTypeComponent from './components/articleCategory/ArticleCategoryComponent';
import HeaderComponent from './components/layout/HeaderComponent';

import './Default.css';

export class Default extends React.Component {
  static propTypes = {
    articles: PropTypes.array,
    categories: PropTypes.array,
    category: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    articles: [],
    categories: [],
  };

  componentWillMount() {
    this.props.dispatch(getCategories());
    this.props.dispatch(getArticles());
    if (this.props.category) {
      this.props.dispatch(getArticlesByCategory(this.props.category.id));
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((!this.props.category && nextProps.category) ||
        (this.props.category && this.props.category.id !== nextProps.category.id)) {
      this.props.dispatch(getArticlesByCategory(nextProps.category.id));
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <ul className="categories">
          <ArticleTypeComponent
            key="defaultCategory"
            name=""
            marked={this.props.category === undefined}
            label="Just nu"
          />
          {
            this.props.categories.map(c =>
              <ArticleTypeComponent
                key={c.id}
                name={c.name}
                marked={this.props.category !== undefined && this.props.category.id === c.id}
                label={c.label}
              />,
            )
          }
        </ul>
        <ul className="articles">
          {
            this.props.articles.map(a =>
              <li key={a.id} className="article">
                <Link to={{ pathname: `/article/${a.id}` }}><img src={a.smallImageUrl} alt="" width="150" height="150" /></Link>
                <div>{a.headline}</div>
              </li>,
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const category = state.blog.categories.find(c => c.name === ownProps.match.params.category);

  return {
    articles: state.blog.articles,
    categories: state.blog.categories,
    category,
  };
}

export default connect(mapStateToProps)(Default);
