import React from 'react';
import './styles/date.css';
import Moment from 'react-moment';
import 'moment-timezone';

function CurrentDate() {
  return (
    <div className='date-container'>
      <Moment format='DD.MM.YYYY'></Moment>
    </div>
  )
}

export default CurrentDate;
