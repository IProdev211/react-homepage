
import React, { Component } from 'react'

import ResponsiveContainer from './HomepageContainer/ResponsiveContainer';

import HomepageContent from './HomepageContent/HomepageContent';
import HomepageFooter from './HomepageFooter/HomepageFooter';


const HomepageLayout = () => (
  <ResponsiveContainer>

    <HomepageContent/>

    <HomepageFooter/>

  </ResponsiveContainer>
);

export default HomepageLayout