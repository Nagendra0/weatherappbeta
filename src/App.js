import React from 'react';
import WeatherCard from './components/WeatherCard/component'
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-12}/>
      <WeatherCard temp={40}/>
      <WeatherCard temp={32}/>
      <WeatherCard temp={20}/>
      <WeatherCard temp={14}/>
    </div>
  );
}

export default App;
