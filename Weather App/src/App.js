import hotbg from "./assets/hot.jpg";
import coldbg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from './weatherService';

function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(hotbg); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      
      // Set the background image based on the temperature
      if (data && data.temp) {
        setBg(data.temp > 20 ? hotbg : coldbg);
      }
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => { 
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'imperial' : 'metric');
  };

  const handleCityChange = (e) => {
    setCity(e.currentTarget.value);
  };

  const handleCityInputKeyPress = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input
              type="text"
              name="city"
              placeholder="Enter City..."
              value={city}
              onChange={handleCityChange}
              onKeyDown={handleCityInputKeyPress}
            />
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>
          {weather && (
            <>
              <div className="section section_temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weatherIcon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed()} °C`}</h1>
                </div>
              </div>
              <Descriptions weather={weather} units={units} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
