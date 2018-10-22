import React, { Component } from 'react';

import HomepageLayout from './components/HomepageLayout';

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <HomepageLayout />
      </Router>
    );
  }
}

export default App;
