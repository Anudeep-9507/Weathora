import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    // If there's no city data, don't show the card
    if (!info.city) {
        return null;
    }

    const HOT_URL="https://images.unsplash.com/photo-1592471396685-06e0da02d03c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHN1bm55JTIwY2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_ICON="https://res.cloudinary.com/dfkfysygf/image/upload/v1747679158/icons8-sunny_rge1gs.gif";
    const COLD_ICON="https://res.cloudinary.com/dfkfysygf/image/upload/v1747679147/icons8-winter_micy0d.gif";
    const RAIN_ICON="https://res.cloudinary.com/dfkfysygf/image/upload/v1747679187/icons8-rainy_r6y26q.gif";

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 90 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}  
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}  <img
                                src={info.humidity > 90 ? RAIN_ICON : info.temp > 15 ? HOT_ICON : COLD_ICON}
                                alt="weather icon"
                                style={{ width: "30px", height: "30px", marginLeft: "10px", verticalAlign: "middle" }}
                            />
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p className="temp-text">Temperature = {info.temp}&deg;C </p>
                            <p>Humidity = {info.humidity}&deg;C </p>
                            <p>Min Temp = {info.Min_temp}&deg;C </p>
                            <p>Max Temp = {info.Max_temp}&deg;C </p>
                            <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
