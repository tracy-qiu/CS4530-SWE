import WeatherDataObserver from './WeatherDataObserver';

export default class StatisticsDisplay implements WeatherDataObserver {
  private _maxTemp = 0;

  private _minTemp = 0;

  private _tempSum = 0;

  private _numReadings = 0;

  displayStatistics(temperature: number): void {
    this._tempSum += temperature;
    this._numReadings += 1;
    if (this._maxTemp < temperature) {
      this._maxTemp = temperature;
    }
    if (this._minTemp > temperature) {
      this._minTemp = temperature;
    }

    // eslint-disable-next-line
    console.log(
      'Avg/max/min temperature = %f/%i/%i',
      this._tempSum / this._numReadings,
      this._maxTemp,
      this._minTemp,
    );
  }

  update(temperature: number): void {
    this.displayStatistics(temperature);
  }
}
