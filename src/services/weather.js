const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherData = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    
    return data;
  } catch (error) {
    throw new Error('Error fetching weather data: ' + error.message);
  }
};