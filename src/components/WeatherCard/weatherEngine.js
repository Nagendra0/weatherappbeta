import React,{ useState, useEffect }  from 'react'
import WeatherCard from './component'

const WeatherEngine = (props) => {
  const location = props.location;
  const [loading,setLoading] =useState(false)
  const [error,setError] = useState(false)
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState({
    temp:null,
    city:null,
    country:null,
    condition:null
  });

  const getWeather = async(q) =>{
    setQuery("")
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${q}&appid=d5a08b4b566dbf6170dcaa6f366b1dcd`
      );
      const resJson = await apiResponse.json();
      setWeather({
        temp : resJson.main.temp,
        city : resJson.name,
        condition : resJson.weather[0].main,
        country : resJson.sys.country
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handlesearch = e =>{
    e.preventDefault();
    getWeather(query);
  };
  

    useEffect(()=>{
    getWeather(location);
    },[location]);
  
    return ( 
    <div> 
      {!loading && !error?(
      <div>
        <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>
        <form action="">
            <input value={query} onChange={e => setQuery(e.target.value)}/>
            <button onClick={e => handlesearch(e)}>Search</button>
        </form>
      </div>):loading?(
            <div style={{color:"black"}} > Loading </div> 
        ):!loading && error?(
          <div style={{color:"black"}} >There is a error!<button onClick={()=> setError(false)}>Reset!</button></div>
        )
        :null
      }
    </div>
    );
}
 
export default WeatherEngine;