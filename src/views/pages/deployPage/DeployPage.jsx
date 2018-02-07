import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deployApi, deploySite, getLatestApiBuilds, getLatestSiteBuilds } from './DeployService';

import './DeployPage.css';

export class DeployPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    deploy: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor() {
    super();
    this.onClickDeployApi = this.handleDeployApi.bind(this);
    this.onClickDeploySite = this.handleDeploySite.bind(this);
    this.onClickShowMoreSite = this.handleShowMoreSite.bind(this);
    this.onClickShowMoreApi = this.handleShowMoreApi.bind(this);

    this.state = {
      siteListLength: 5,
      apiListLength: 5,
    };
  }

  componentDidMount() {
    this.updateBuilds();

    this.timerID = setInterval(
      () => this.updateBuilds(),
      10 * 1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateBuilds() {
    this.props.dispatch(getLatestApiBuilds(this.state.apiListLength));
    this.props.dispatch(getLatestSiteBuilds(this.state.siteListLength));
  }


  handleDeployApi() {
    this.props.dispatch(deployApi());
  }

  handleDeploySite() {
    this.props.dispatch(deploySite());
  }

  handleShowMoreSite() {
    this.setState({
      siteListLength: this.state.siteListLength + 5,
    });

    this.props.dispatch(getLatestSiteBuilds(this.state.siteListLength + 5));
  }

  handleShowMoreApi() {
    this.setState({
      apiListLength: this.state.apiListLength + 5,
    });

    this.props.dispatch(getLatestApiBuilds(this.state.apiListLength + 5));
  }

  renderBuildData(build) {
    let cn = '';
    switch (build.status) {
      default:
        break;
      case 'DONE':
        cn = 'done';
        break;
      case 'STARTED':
        cn = 'started';
        break;
      case 'FAILED':
        cn = 'failed';
        break;
      case 'QUEUED':
        cn = 'queued';
        break;
    }

    return (
      <tr key={build.id}>
        <td>{build.version}</td>
        <td>{build.hash}</td>
        <td>{build.message}</td>
        <td className={cn}>{build.status}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <h2>Site builds</h2>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Hash</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.deploy.siteBuilds.map(build => this.renderBuildData(build))}
            </tbody>
          </table>
          {
            this.props.deploy.siteBuilds.length >= this.state.siteListLength &&
            <button onClick={this.onClickShowMoreSite}>Visa fler</button>
          }
        </div>
        <div>
          <h2>Api builds</h2>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Hash</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.deploy.apiBuilds.map(build => this.renderBuildData(build))}
            </tbody>
          </table>
          {
            this.props.deploy.apiBuilds.length >= this.state.apiListLength &&
            <button onClick={this.onClickShowMoreApi}>Visa fler</button>
          }
        </div>
        <div>
          {/* <button onClick={this.onClickDeployApi}>Deploy API</button> */}
        </div>
        <div>
          {/* <button onClick={this.onClickDeploySite}>Deploy Site</button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deploy: state.deploy,
  };
}

export default connect(mapStateToProps)(DeployPage);

