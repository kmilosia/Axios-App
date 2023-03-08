import React from 'react';
import './styles/time.css';
import Moment from 'react-moment';
import 'moment-timezone';

function Time() {
  let today = new Date();
   let hours = today.getHours();
  return (
    <div className='time-container'>
      <p>{hours >= 5 && hours < 11 ? "Good morning!" : hours >= 11 && hours < 17 ? "Good afternoon1" : "Good evening!"}</p>
      <Moment className='time' interval={1000} format='hh:mm:ss'></Moment>
    </div>
  )
}

export default Time;
