import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard/component'
import './App.css';

function App() {
  const [query,setQuery] = useState("New Delhi");
  const [weather,setWeather] = useState({
    temp:null,
    city:null,
    country:null,
    condition:null
  });

  const data = async(q) =>{
    const apiResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${q}&appid=d5a08b4b566dbf6170dcaa6f366b1dcd`
    );
    const resJson = await apiResponse.json();
    return resJson;
  };

  const handlesearch = e =>{
    e.preventDefault();
    data(query).then(res =>{
      setWeather({
        temp : res.main.temp,
        city : res.name,
        condition : res.weather[0].main,
        country : res.sys.country
      });
    });
  };

useEffect(()=>{
  data(query).then(res =>{
    setWeather({
      temp : res.main.temp,
      city : res.name,
      condition : res.weather[0].main,
      country : res.sys.country
    });
  });
},[]);
  

  return (
    <div className="App">
      <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>
      {/* <WeatherCard temp={40} condition='Clear' city='Detroite' country='US'/>
      <WeatherCard temp={32} condition='Mostly Cloudy' city='New York' country='US'/>
      <WeatherCard temp={20} condition='Clear Night' city='New Delhi' country='IN'/>
      <WeatherCard temp={14} condition='Drizzle' city='New Delhi' country='IN'/> */}
      <form action="">
        <input value={query} onChange={e => setQuery(e.target.value)}/>
        <button onClick={e => handlesearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
