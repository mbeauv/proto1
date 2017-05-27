import React, { Component } from 'react';

import CitiesList from '../containers/cities_list.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <CitiesList />
      </div>
    );
  }
}

export default App;
