import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { getArticle } from './BlogService';

export class ArticlePage extends React.Component {
  static propTypes = {
    article: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string,
  };

  static defaultProps = {
    id: '',
    article: {},
  };

  componentWillMount() {
    this.props.dispatch(getArticle(this.props.id));
  }

  render() {
    return (
      <div>
        <img src={this.props.article.heroImageUrl} alt="" width="600" />
        <h1>{this.props.article.headline}</h1>
        <ReactMarkdown softBreak="br" source={this.props.article.bodyText} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    article: state.blog.article,
    id: ownProps.match.params.id,
  };
}

export default connect(mapStateToProps)(ArticlePage);
