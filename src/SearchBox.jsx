import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
    let [error, setError]= useState(false);
    const GEO_URL="https://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    let limit=3;

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let getWeatherInfo=async()=>{
        try{
            let response= await fetch(`${GEO_URL}?q=${city}&limit=${limit}&appid=${API_KEY}`);
            // doesn't have temp, only lat and lon
            let geoData= await response.json();
            // console.log("geocoder API response");
            // console.log(geoData);
            
            const {lat, lon}= geoData[0];
            let weatherResponse = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            // uses lat and lon from geoData to response temp 
            let weatherData = await weatherResponse.json();
            // console.log("weather API output");
            // console.log(weatherData);
            let result={
                city: city,
                temp: weatherData.main.temp,
                Min_temp: weatherData.main.temp_min,
                Max_temp: weatherData.main.temp_max,
                humidity: weatherData.main.humidity,
                feels_like: weatherData.main.feels_like,
                weather: weatherData.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        }
    let handleSubmit=async(event)=>{ 
        try{
        event.preventDefault();
        setCity("");
        console.log(city);
        let newInfo=await(getWeatherInfo());
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return(
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" 
            value={city} onChange={handleChange} required/>
        <Button variant="contained" endIcon={<TravelExploreIcon/>} type="submit">
            Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p>}
        </form>
     </div>)
}