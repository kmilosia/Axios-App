import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/weather.css';

const apiURL = 'http://api.weatherapi.com/v1/current.json?key=8bce3ea3263944a8b10175644230803&q=Warsaw&aqi=no';

const Weather = () => {
  const [data, setData] = useState(null); //null is default value

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error);
    });
  },[])

  if(!data) return null;

  return (
    <div className='weather-container'>
      <h1>{data.current.temp_c}&deg;C</h1>
      <h2>Warsaw</h2>
    </div>
  )
}

export default Weather;
