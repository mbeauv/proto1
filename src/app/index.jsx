import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React Once Again And Again!</p>;
  }
}

render(<App/>, document.getElementById('app'));
