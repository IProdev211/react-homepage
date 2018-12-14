import React from "react";

import PropTypes from 'prop-types';

import {Container, Menu} from "semantic-ui-react";

import {Link} from "react-router-dom";

import AuthButton from './AuthButton';

const HomepageMenu = ({fixed, desktop, location}) => (
    <Container>
        <Menu.Item as={Link} to="/" active={location.pathname === '/'}>Home</Menu.Item>
        <Menu.Item as={Link} to="/public" active={location.pathname === '/public'}>Public</Menu.Item>

        <Menu.Item as={Link} to="/chat" active={location.pathname === '/chat'}>Chat</Menu.Item>

        {desktop ? (
            <Menu.Item position='right'>
              <AuthButton fixed={fixed} />
            </Menu.Item>
        ) : (
            <div>
                <Menu.Item as={Link} to='/login' active={location.pathname === '/login'} >Log in</Menu.Item>
                <Menu.Item as={Link} to='/register' active={location.pathname === '/register'} >Sign up</Menu.Item>
            </div>
        )}



    </Container>
);


HomepageMenu.propTypes = {
  fixed: PropTypes.bool,
  desktop: PropTypes.bool
};

export default HomepageMenu;