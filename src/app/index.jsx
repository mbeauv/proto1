import React from 'react';
import {render} from 'react-dom';
var request = require('sync-request');

import CitiesList from './cities_list.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    var res = request('GET', 'http://localhost:3000/mobile/cities', {
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    this.state = {
      cities: JSON.parse(res.getBody())
    }

  }

  render () {
    return (
      <div className="container">
        <CitiesList cities={this.state.cities}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
