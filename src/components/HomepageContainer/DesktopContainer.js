import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {Responsive, Segment, Visibility, Menu} from "semantic-ui-react";

import HomepageHeading from '../HomepageHeading/HomepageHeading';

import HomepageMenu from '../HomepageMenu/HomepageMenu';


class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    let homepageHeading =  <HomepageHeading />;
    let segmentStyle = { minHeight: 700, padding: '1em 0em' };

    switch (this.props.location.pathname) {
        case '/register':
        case '/login':
            segmentStyle = { padding: '1em 0em' };
            homepageHeading = null;
          break;
        default:
            break;
    }

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={segmentStyle}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >

            <HomepageMenu fixed={fixed} desktop location={this.props.location} />

            </Menu>

            {homepageHeading}

          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default DesktopContainer;