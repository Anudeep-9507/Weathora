import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import BackgroundVideo from "./BackgroundVideo";
import { useState } from "react";

const defaultBackgroundUrl = "https://res.cloudinary.com/dfkfysygf/video/upload/v1748077339/videoplayback_1_uy1icf.webm"; 
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]= useState({
        city: "",
        temp: null,
        Min_temp: null,
        Max_temp: null,
        humidity: null,
        feels_like: null,
        weather: "",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
            <BackgroundVideo 
                weatherInfo={weatherInfo} 
                defaultVideoUrl={defaultBackgroundUrl}
            />
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