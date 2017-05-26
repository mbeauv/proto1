import React from 'react';

const CityListItem = (props) => {
  const city = props.city;
  return (
    <li>{city.name}</li>
  );
}

export default CityListItem;
