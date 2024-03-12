import WeatherDataObserver from './WeatherDataObserver';

export default class ForecastDisplay implements WeatherDataObserver {
  private _currentPressure = 0;

  private _lastPressure = 0;

  displayForecast(pressure: number): void {
    this._lastPressure = this._currentPressure;
    this._currentPressure = pressure;
    let forecast;
    if (this._currentPressure > this._lastPressure) forecast = 'Improving weather on the way!';
    else if (this._currentPressure === this._lastPressure) forecast = 'More of the same';
    else forecast = 'Watch out for cooler, rainy weather';
    // eslint-disable-next-line
    console.log('Forecast: %s', forecast);
  }

  update(pressure: number): void {
    this.displayForecast(pressure);
  }
}
