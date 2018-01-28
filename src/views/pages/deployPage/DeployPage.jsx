import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deployApi, deploySite } from './DeployService';

export class DeployPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  handleDeployApi() {
    this.props.dispatch(deployApi());
  }

  handleDeploySite() {
    this.props.dispatch(deploySite());
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleDeployApi()}>Deploy API</button>
        </div>
        <div>
          <button onClick={this.handleDeploySite()}>Deploy Site</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.now.value,
  };
}

export default connect(mapStateToProps)(DeployPage);

