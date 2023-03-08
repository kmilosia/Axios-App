import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/quote.css';

const apiURL = "https://dummyjson.com/quotes/1";

function Quote() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    })
  },[]);
  if(!data) return null;
  return (
    <div className='quote-container'>
      <p><cite>{data.quote}</cite></p>
      <p>- {data.author}</p>
    </div>
  )
}

export default Quote;
