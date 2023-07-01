import React, { useState } from 'react';
import './App.css';
import { FaCloud, FaTemperatureLow, FaMapMarkerAlt,FaSun,FaCloudRain } from 'react-icons/fa';

function App() {
 
  const api = {
    key: '3f476e99c2241f80a4bcddbd22a468b1',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
      document.getElementById("s1").style.display = "block";

  };

  const getWeatherIcon = () => {
    if (weather.weather && weather.weather[0].main === 'Clouds') {
      return <FaCloud className='cloud  '/>;
    }
    else  if (weather.weather && weather.weather[0].main === 'Clear') {
      return <FaSun className='sun' />;
    }
    else  if (weather.weather && weather.weather[0].main === 'Rain') {
      return <FaCloudRain className='rain' />;
    }
    return null;
  };

  return (
    <div className="App">
      <h1>
        
       <strong>Write a country name</strong> 
      </h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="LOL"
      />
      <button onClick={searchPressed} className="LOL1">
        Search
      </button>
    
      <p className='p1'>
        <FaMapMarkerAlt className='pos' id='s1'/><br></br><strong className='txt'>{weather.name}</strong>
      </p>
      {weather.main && (
        <p className='p2'>  <FaTemperatureLow className={weather.main.temp > 32 ? 'high' : weather.main.temp < 15 ? 'low' : 'nrml'} />
<br></br><strong className='txt'> {weather.main.temp}°C </strong> </p>
      )}
      <div className='p3'>
            <div id="sui" className='icon3'>{getWeatherIcon()}</div>

      {weather.weather && <p ><strong className='txt'>{weather.weather[0].description}</strong></p>}
      </div>
    </div>
  );
}

export default App;
