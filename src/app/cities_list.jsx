import React, { Component } from 'react';
import CityListItem from './city_list_item.jsx';

const CityList = ({cities}) => {

  const city_items = cities.map((city) => {
    return <CityListItem key={city.id} city={city} />
  });

  return (
    <div className="panel">
      <h1>City List</h1>
      <ul className="col-md-4 list-group">
        {city_items}
      </ul>
    </div>
  );
}

export default CityList;
