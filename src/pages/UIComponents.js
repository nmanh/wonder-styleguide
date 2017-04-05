import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  Media,
  Panel,
  Modal,
  NavTab,
  Nav,
  Divider,
  Badge,
} from '../components/ui-components';
import { PLSubNav } from '../components/patterns-library';

class UIComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          name: 'Overview',
          url: props.match.url,
        },
        {
          name: 'Media',
          url: `${props.match.url}/media`,
        },
        {
          name: 'Panel',
          url: `${props.match.url}/panel`,
        },
        {
          name: 'Modal',
          url: `${props.match.url}/modal`,
        },
        {
          name: 'Nav Tab',
          url: `${props.match.url}/nav-tab`,
        },
        {
          name: 'Nav',
          url: `${props.match.url}/nav`,
        },
        {
          name: 'Divider',
          url: `${props.match.url}/divider`,
        },
        {
          name: 'Badge',
          url: `${props.match.url}/badge`,
        },
      ]
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <PLSubNav dataSource={this.state.nav} />
        <h1>UI Components</h1>

        <Switch>
          <Route path={`${match.url}/media`} component={Media} />
          <Route path={`${match.url}/panel`} component={Panel} />
          <Route path={`${match.url}/modal`} component={Modal} />
          <Route path={`${match.url}/nav-tab`} component={NavTab} />
          <Route path={`${match.url}/nav`} component={Nav} />
          <Route path={`${match.url}/divider`} component={Divider} />
          <Route path={`${match.url}/badge`} component={Badge} />
          <Route path={match.url} render={() => (
            <h2>Overview</h2>
          )} />
        </Switch>
      </div>
    )
  }
}

export default UIComponents;