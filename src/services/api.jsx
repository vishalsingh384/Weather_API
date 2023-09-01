import axios from 'axios';

const API_KEY='31ea21580b889777b7948ba3b3fb9ec7';
const API_URL='http://api.openweathermap.org/data/2.5/weather';
const API_KEY_UNSPALSH='m_7bZVHIgpcP0AIO02TSECnDrbkH3WdU5KqYdnHrrjQ';

const getWeather=async(city)=>{
    try{
        const weatherData=await axios.get(`${API_URL}?q=${city},&appid=${API_KEY}&units=metric`);

        const type=weatherData.data.weather[0].main;
        const weatherType=await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${type}&client_id=${API_KEY_UNSPALSH}`);

        const code=weatherData.data.weather[0].icon;
        const iconUrl=`https://openweathermap.org/img/wn/${code}@2x.png`;

        return {weatherData,weatherType,iconUrl};
    }catch(err){
        console.log(err.message);
        return {};
    }
}

export default getWeather;