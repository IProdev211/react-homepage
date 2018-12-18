
import React from 'react';

import Websocket from 'react-websocket';

import {session} from './Session';

const SecureWebsocket = ({...rest}) => (
  <Websocket {...rest} protocol={session.get('token')} />
);

export default SecureWebsocket;