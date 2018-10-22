
import React from 'react'

import { Route } from "react-router-dom";


import ResponsiveContainer from './HomepageContainer/ResponsiveContainer';

import Home from './HomepageContent/Home/Home';

import Public from "./HomepageContent/Public/Public";


import HomepageFooter from './HomepageFooter/HomepageFooter';


const HomepageLayout = () => (
  <ResponsiveContainer>

    <Route exact path="/" component={Home} />

    <Route path="/public" component={Public} />

    <HomepageFooter/>

  </ResponsiveContainer>
);

export default HomepageLayout