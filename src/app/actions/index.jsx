import axios from 'axios';

export const FETCH_CITIES = 'FETCH_CITIES';

const URL= "http://localhost:3000/mobile/cities";

export function fetchCities() {
  const request = axios.get(URL, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  });


  return {
    type: FETCH_CITIES,
    payload: request
  }
}
