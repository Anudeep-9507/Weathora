import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import BackgroundVideo from "./BackgroundVideo";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]= useState({
        city: "Mumbai",
        temp: 20,
        Min_temp: 19,
        Max_temp: 26,
        humidity: 32,
        feels_like: 35,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
            <BackgroundVideo weatherInfo={weatherInfo} />
            <div style={{
                textAlign: "center",
                position: "relative",
                zIndex: 2,
                color: "white",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            }}>
                <h2 className="weathora-title">Weathora</h2>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </>
    )
}