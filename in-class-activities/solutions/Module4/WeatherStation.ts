import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';

const currentConditionsDisplay = new CurrentConditionsDisplay();
const forecastDisplay = new ForecastDisplay();
const statisticsDisplay = new StatisticsDisplay();
const heatIndexDisplay = new HeatIndexDisplay();

const weatherData = new WeatherData();

weatherData.registerObserver(currentConditionsDisplay);
weatherData.registerObserver(forecastDisplay);
weatherData.registerObserver(statisticsDisplay);
weatherData.registerObserver(heatIndexDisplay);

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
