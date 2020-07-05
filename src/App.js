import React from 'react';
import WeatherCard from './components/WeatherCard/component'
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-12} condition='Blizzard' city='New Delhi' country='IN'/>
      <WeatherCard temp={40} condition='Clear' city='Detroite' country='US'/>
      <WeatherCard temp={32} condition='Mostly Cloudy' city='New York' country='US'/>
      <WeatherCard temp={20} condition='Clear Night' city='New Delhi' country='IN'/>
      <WeatherCard temp={14} condition='Drizzle' city='New Delhi' country='IN'/>
    </div>
  );
}

export default App;
