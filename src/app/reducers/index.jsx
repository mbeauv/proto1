import { combineReducers } from 'redux';

import CitiesReducer from './reducer_cities.jsx';

const rootReducer = combineReducers({
  cities: CitiesReducer
});

export default rootReducer;
