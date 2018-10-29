
import React from 'react'

import { Route } from "react-router-dom";


import ResponsiveContainer from './HomepageContainer/ResponsiveContainer';

import Home from './HomepageContent/Home/Home';
import Public from "./HomepageContent/Public/Public";
import Protected from "./HomepageContent/Protected/Protected";
import Login from "./HomepageContent/Login/Login";

import HomepageFooter from './HomepageFooter/HomepageFooter';


const HomepageLayout = () => (
  <ResponsiveContainer>

    <Route exact path="/" component={Home} />

    <Route path="/public" component={Public} />

    <Route path="/protected" component={Protected} />

    <Route path="/login" component={Login} />



    <HomepageFooter/>

  </ResponsiveContainer>
);

export default HomepageLayout