import React from 'react';
import {render} from 'react-dom';

import CitiesList from './cities_list.jsx';

var cities = [
  {
    name: "Montreal",
    citizens: 12131
  },
  {
    name: "Ottawa",
    citizens: 4421
  }
];

class App extends React.Component {
  render () {
    return (
      <div>
        <CitiesList />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
