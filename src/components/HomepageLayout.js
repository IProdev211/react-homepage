
import React from 'react'

import ResponsiveContainer from './HomepageContainer/ResponsiveContainer';

import Home from './HomepageContent/Home/Home';
import HomepageFooter from './HomepageFooter/HomepageFooter';


const HomepageLayout = () => (
  <ResponsiveContainer>

    <Home/>

    <HomepageFooter/>

  </ResponsiveContainer>
);

export default HomepageLayout