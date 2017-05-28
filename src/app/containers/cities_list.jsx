import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../actions/index.jsx';

import CityListItem from '../components/city_list_item.jsx';

class CityList extends Component {

  componentDidMount() {
    this.props.fetchCities();
  }
  
  renderCities() {
    return this.props.cities.map((city) => {
      return <CityListItem key={city.id} city={city} />
    });
  }

  render() {
    return (
      <div className="city-list">
        <h1>City List</h1>
        <ul className="col-md-4 list-group">
          {this.renderCities()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCities}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
