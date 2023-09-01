import { useEffect, useState } from 'react';
import './App.css';
import getWeather from './services/api';
import CardWeather from './components/CardWeather';

function App() {

  

  
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const [innerbg, setInnnerBg] = useState('');
  const [outerbg, setOuterBg] = useState('');
  const [icon, setIcon]=useState('');
  
  useEffect(()=>{
    fetchWeather();
  },[]);

  const fetchWeather=async ()=>{
    const { weatherData, weatherType, iconUrl } = await getWeather(query===''?'Bengaluru':query);
      if(weatherData&&weatherType&&iconUrl){
        setData(weatherData.data);
        setInnnerBg(weatherType.data.results[0].urls.full);
        setOuterBg(weatherType.data.results[1].urls.full);
        setIcon(iconUrl);
        setQuery('');
      }else{
        // console.log('hello');
        setData({});
      }
  }
  
  const search = async (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  }
  return (
    <div className='parent-container' style={{backgroundImage:`url(${outerbg})`}}>
      <div className='app' style={{ backgroundImage: `url(${innerbg})` }}>
        <main>
          <div className='search-box'>
            <input type='text' className='search-bar' placeholder='Enter a city' onChange={(e) => setQuery(e.target.value)}
              value={query} onKeyDown={search}
            />
          </div>
          <CardWeather data={data} icon={icon}/>
        </main>
      </div>
    </div>
  );
}

export default App;
