import React from 'react';

const CityListItem = (props) => {
  const city = props.city;
  return (
    <li>{city.city}</li>
  );
}

export default CityListItem;
