import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getBeamz from './HelloWorldService';

export class HelloWorldPage extends React.Component {
  static propTypes = {
    beamz: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    beamz: [],
  };

  componentWillMount() {
    this.props.dispatch(getBeamz());
  }

  render() {
    return (
      <ul>
        {this.props.beamz.map(b => <li key={b.id}>{b.name} {b.lastname} - {b.group}</li>)}
      </ul>
    );
  }
}

export default connect(state => ({
  beamz: state.helloWorld.beamz,
}))(HelloWorldPage);
