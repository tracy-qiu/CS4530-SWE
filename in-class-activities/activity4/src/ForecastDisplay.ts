import WeatherData from './WeatherData';
import IWeatherDataClient from './WeatherDataClient';

export default class ForecastDisplay implements IWeatherDataClient {
  private data:WeatherData;

  constructor(data:WeatherData) {
    this.data= data;
  }

  notify(data: WeatherData): void {
    this.data = data;
    this.displayForecast(this.data);
  }
  
  private _currentPressure = 0;

  private _lastPressure = 0;


  displayForecast(weatherData: WeatherData): void {
    this._lastPressure = this._currentPressure;
    this._currentPressure = weatherData.pressure;
    let forecast;
    if (this._currentPressure > this._lastPressure)
      forecast = 'Improving weather on the way!';
    else if (this._currentPressure === this._lastPressure)
      forecast = 'More of the same';
    else
      forecast = 'Watch out for cooler, rainy weather';
    // eslint-disable-next-line
    console.log('Forecast: %s', forecast);
  }

}
