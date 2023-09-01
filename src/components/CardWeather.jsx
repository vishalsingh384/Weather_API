import React from 'react'
import { Link } from 'react-router-dom';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';

const CardWeather = ({data,icon}) => {
    console.log(data);
    const handleDate = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }
    return (
        <>
            {(typeof data.main != 'undefined') ? (
                <>
                    <div className='location-box'>
                        <div className='location'>{data.name}, {data.sys.country}</div>
                        <div className='date'>{handleDate(new Date())}</div>
                    </div>
                    <div className='weather-box'>
                        <div className='icon' style={{backgroundImage:`url(${icon})`}}></div>
                        <div className='temp'>{Math.round(data.main.temp)}°C</div>
                        <div className='weather'>{data.weather[0].main}</div>
                    </div>
                    <div className='min-max-box'>
                        <div className='max-weather'>{Math.round(data.main.temp_max)}°C</div>
                        <div className='vertical-line'></div>
                        <div className='min-weather'>{Math.round(data.main.temp_min)}°C</div>
                        <Link to='/globe'>
                                <input type='button' value='Globe' name='Globe'/>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className='warning-box'>
                        <div className='warning'>Please Check the city name!</div>
                        <div className='warning-beta'>Look out for spaces or spelling mistakes.</div>
                    </div>
                </>
            )}
        </>
    )
}

export default CardWeather