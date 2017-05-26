import React from 'react';
import {render} from 'react-dom';

import CitiesList from './cities_list.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: [
        {
          name: "Montreal",
          citizens: 12131
        },
        {
          name: "Ottawa",
          citizens: 4421
        }
      ]
    };

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
