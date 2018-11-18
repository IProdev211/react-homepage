import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {Container, Icon, Responsive, Segment, Sidebar, Menu} from "semantic-ui-react";

import HomepageHeading from '../HomepageHeading/HomepageHeading';

import HomepageMenu from '../HomepageMenu/HomepageMenu';

import AuthButton from '../HomepageMenu/AuthButton';

class MobileContainer extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sidebarOpened && prevState.sidebarOpened)
      this.setState({ sidebarOpened: false });
  }

  handlePusherClick = () => {
    if (this.state.sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {

    const { children } = this.props;
    const { sidebarOpened } = this.state;

    let homepageHeading =  <HomepageHeading mobile />;
    let segmentStyle = { minHeight: 350, padding: '1em 0em' };

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

      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' inverted vertical visible={sidebarOpened}>

            <HomepageMenu location={this.props.location}/>

          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={segmentStyle}
              vertical
            >


              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>

                  <Menu.Item position='right'>

                    <AuthButton />

                  </Menu.Item>

                </Menu>
              </Container>

                {homepageHeading}

            </Segment>

            {children}

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileContainer;