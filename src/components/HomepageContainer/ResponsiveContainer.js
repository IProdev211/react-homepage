import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

import { withRouter } from "react-router-dom";


const ResponsiveContainer = withRouter(({ children, location }) => (
  <div>
    <DesktopContainer location={location} >{children}</DesktopContainer>
    <MobileContainer location={location} >{children}</MobileContainer>
  </div>
));

export default ResponsiveContainer;