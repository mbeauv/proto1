import React, { Component } from 'react';
import CityListItem from './city_list_item.jsx';

const CityList = (props) => {

  const cities = props.cities.map((city) => {
    return <CityListItem key={city.name} city={city} />
  });

  return (
    <div className="panel">
      <h1>City List</h1>
      <ul className="col-md-4 list-group">
        {cities}
      </ul>
    </div>
  );
}

export default CityList;
