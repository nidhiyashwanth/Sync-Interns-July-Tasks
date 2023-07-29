// weatherservice.js
const API_KEY = "bc4f1bc8ce3dabbb5a5fb54a126e0798";

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  try {
    const data = await fetch(URL).then((res) => res.json());

    if (!data || !data.weather || !data.main) {
      console.error("Invalid API response:", data);
      return null;
    }

    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name,
    } = data;

    if (!weather[0] || !weather[0].description || !weather[0].icon) {
      console.error("Invalid weather data:", weather[0]);
      return null;
    }

    const { description, icon } = weather[0];

    return {
      description,
      iconURL: makeIconURL(icon), // Use the correct iconId to generate the URL
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
    };
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export { getFormattedWeatherData };
