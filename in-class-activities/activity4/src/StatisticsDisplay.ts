import WeatherData from './WeatherData';
import IWeatherDataClient from './WeatherDataClient';

export default class StatisticsDisplay implements IWeatherDataClient {
  private data:WeatherData;

  constructor(data:WeatherData) {
    this.data= data;
  }

  notify(data: WeatherData): void {
    this.data = data;
    this.displayStatistics(this.data);
  }

  private _maxTemp = 0;

  private _minTemp = 0;

  private _tempSum = 0;

  private _numReadings = 0;

  displayStatistics(currentData: WeatherData): void {
    this._tempSum += currentData.temperature;
    this._numReadings += 1;
    if (this._maxTemp < currentData.temperature) {
      this._maxTemp = currentData.temperature;
    }
    if (this._minTemp > currentData.temperature) {
      this._minTemp = currentData.temperature;
    }

    // eslint-disable-next-line
    console.log('Avg/max/min temperature = %f/%i/%i', this._tempSum / this._numReadings, this._maxTemp, this._minTemp);
  }
}
