import WeatherData from './WeatherData';
import IWeatherDataClient from './WeatherDataClient';

export default class CurrentConditionsDisplay  implements IWeatherDataClient{
  private data:WeatherData;

  constructor(data:WeatherData) {
    this.data= data;
  }

  notify(data: WeatherData): void {
    this.data = data;
    this.displayCurrentConditions(this.data);
  }

  displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }
}
