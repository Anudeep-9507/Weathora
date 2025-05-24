import { useEffect, useState } from 'react';
import './BackgroundVideo.css';

const videoUrls = {
    hot: "https://res.cloudinary.com/dfkfysygf/video/upload/v1748061878/videoplayback_zomf9g.mp4",
    cold: "https://res.cloudinary.com/dfkfysygf/video/upload/v1748066976/mixkit-snow-falling-in-winter-around-bare-trees-45060-hd-ready_fwbljh.mp4",
    rain: "https://res.cloudinary.com/dfkfysygf/video/upload/v1748066582/videoplayback_4_jf9usa.mp4"
};

export default function BackgroundVideo({ weatherInfo }) {
    const [videoUrl, setVideoUrl] = useState(videoUrls.hot);

    useEffect(() => {
        const temp = Number(weatherInfo.temp);
        const humidity = Number(weatherInfo.humidity);
        if (humidity > 90) {
            setVideoUrl(videoUrls.rain);
        } else if (temp > 15) {
            setVideoUrl(videoUrls.hot);
        } else {
            setVideoUrl(videoUrls.cold);
        }
    }, [weatherInfo]);

    return (
        <div className="background-video-container">
            <video
                key={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
        </div>
    );
} 