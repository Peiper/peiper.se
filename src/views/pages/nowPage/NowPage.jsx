import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNow } from './NowService';

export class NowPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  componentWillMount() {
    this.props.dispatch(getNow());
  }

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.now.value,
  };
}

export default connect(mapStateToProps)(NowPage);

