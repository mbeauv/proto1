import { FETCH_CITIES } from '../actions/index.jsx';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_CITIES:
      return action.payload.data;
  }
  return state;
}
