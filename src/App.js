import React from 'react';
import WeatherEngine from './components/WeatherCard/weatherEngine'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <WeatherEngine location = "New Delhi"/>
      <WeatherEngine location = "Melton"/>
      <WeatherEngine location = "Toronto"/>
      <WeatherEngine location = "Seoul"/>
      <WeatherEngine location = "Tokyo"/>
    </div>
  );
}

export default App;
